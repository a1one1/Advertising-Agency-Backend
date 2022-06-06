const Claim = require('../models/Claims.model');
const nodemailer = require('nodemailer')

module.exports.claimsController = {
  addClaims: async (req, res) => {
    try {
      const { name, phone } = req.body;

      const transporter = nodemailer.createTransport({
        host: "smtp.mail.ru",
        port: 465,
        secure: true,
        auth: {
          user: "diamant003@mail.ru",
          pass: "ddGpseWD86Q7dUFcwvgq",
        },
      });

      await transporter.sendMail({
        from: "<diamant003@mail.ru>",
        to: `${name}`,
        subject: "Message from Diamant",
        text: "Поздравляю, ваша заявка успешно отправлена!",
        html: "Поздравляю, ваша заявка успешно отправлена!",
      });

      const claim = await Claim.create({
        name,
        phone,
      });
      res.json(claim);
    } catch (e) {
      res.status(401).json({ e: e.toString() });
    }
  },
};
