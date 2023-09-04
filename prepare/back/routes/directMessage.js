const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const passport = require('passport');
const { User, Image, ChattingChannel, Message } = require('../models');
const path = require('path');
const db = require('../models');

const router = express.Router();

router.get('/loadPrivate/:receiverId', async (req, res, next) => {
  try {
    const userId = parseInt(req.user.id);
    const receiverId = parseInt(req.params.receiverId);
    const idNum = [userId, receiverId].sort();
    const receiver = await User.findOne({ where: { id: receiverId } });
    const channel = await ChattingChannel.findOrCreate({
      where: { name: `private_${idNum[0]}_${idNum[1]}` }
    })
    const trueChannel = channel[0]
    const messages = await Message.findAll({ where: { id: trueChannel.id } });
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

router.post('/:serverId', async (req, res, next) => {
  try {
    const serverId = parseInt(req.params.serverId);
    const senderId = parseInt(req.user.id);
    const channel = await ChattingChannel.findOne({ where: { id: serverId } });
    const sender = await User.findOne({ where: { id: senderId } });
    if (!channel) {
      return res.send(404).send('서버 오류');
    }
    await Message.create({
      content: req.body.content,
      UserId: senderId,
      ChattingChannelId: serverId,
      include: [{
        association: db.User,
      }, {
        association: db.ChattingChannel,
      }]
    })
    res.status(200).send({ data: req.body.content });
  } catch (error) {
    console.error(error);
    next(error);
  }
})

module.exports = router;