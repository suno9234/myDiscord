const express = require('express');
const { Op } = require('sequelize');
const passport = require('passport');
const { User, Image, ChattingChannel, Message } = require('../models');
const path = require('path');
const db = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET directMessages?receiverId=10
  try {
    const userId = parseInt(req.user.id, 10);
    const receiverId = parseInt(req.query.receiverId, 10);
    const idNum = [userId, receiverId].sort();
    const receiver = await User.findOne({ where: { id: receiverId } });
    const channel = await ChattingChannel.findOrCreate({
      where: { name: `private_${idNum[0]}_${idNum[1]}` }
    })
    const trueChannel = channel[0]
    const where = {
      ChattingChannelId: trueChannel.id,
    };
    if (parseInt(req.query.lasId, 10)) {
      where.id = {
        [Op.lt]: parseInt(req.query.lastId, 10)
      }
    }
    const messages = await Message.findAll({
      where,
      limit: 20,
      order: [
        ['createdAt', 'DESC'],
      ],
      include: [{
        model: User,
        attributes: ['id', 'nickname', 'tag'],
      }]
    })
    console.log(messages);
    return res.status(200).send({
      receiver,
      channelId: trueChannel.id,
      messages,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});


module.exports = router;