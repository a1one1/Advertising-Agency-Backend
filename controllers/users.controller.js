const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Cart = require('../models/Cart.model');
const Purchased = require('../models/Purchased.model');

module.exports.usersController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  registrationUser: async (req, res) => {
    try {
      const { login, password, phone } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS),
      );

      const user = await User.create({
        login,
        password: hash,
        phone,
      });

      await Cart.create({
        user: user._id,
      });

      await Purchased.create({
        user: user._id,
      });

      res.json(user);
    } catch (e) {
      res.status(401).json('Ошика ' + e.toString());
    }
  },
  authorizationUser: async (req, res) => {
    try {
      const { login, password } = req.body;

      const candidate = await User.findOne({ login });

      if (!candidate) {
        res.status(401).json('неверный логин или пароль');
      }

      const valid = await bcrypt.compare(password, candidate.password);
      if (!valid) {
        res.status(401).json('неверный логин или пароль');
      }

      const payload = {
        id: candidate.id,
      };

      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: '21d',
      });

      res.json({
        token,
        id: candidate._id,
      });
    } catch (e) {
      res.status(401).json('Ошибка ' + e.toString());
    }
  },
  deleteUser: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.params.userId });
      await cart.remove();
      const user = await User.findOne({ _id: req.params.userId });
      await user.remove();
      res.json(user);
    } catch (e) {
      res.status(401).json('Ошибка ' + toString());
    }
  },
};
