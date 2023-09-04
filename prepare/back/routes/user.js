const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const passport = require('passport');
const { User, Image } = require('../models');
const path = require('path');
const db = require('../models');

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) { // 
      const ext = path.extname(file.originalname); //확장자 추출
      const basename = path.basename(file.originalname, ext);
      done(null, basename + new Date().getTime() + ext);
    }
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
})

router.post('/signUp', async (req, res, next) => { // POST /user/signUp
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    })
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다');
    }
    const sameNameUser = await User.findAll({
      where: { nickname: req.body.nickname }
    })
    const sameNameUserTags = [];
    [].forEach.call(sameNameUser, (v) => sameNameUserTags.push(v.tag));
    const tagArray = Array(9999).fill(0).map((v, i) => i).filter((v) => !sameNameUserTags.includes(v)).sort(() => Math.random() - 0.5);
    const tag = tagArray[0];
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
      tag: tag,
      state: 'offline',
    })
    res.status(201).send('ok');
  } catch (error) {
    console.error(error);
    next(error)
  }
})

router.post('/login', (req, res, next) => { // POST user/login
  passport.authenticate('local', (err, user, errinfo) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (errinfo) {
      return res.status(401).send(errinfo.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: {
          id: user.id,
        },
        attributes: {
          exclude: ['password'],
        },
        include: [{
          model: db.User,
          as: 'Friends',
        },{
          model : db.Image,
          as : 'ProfileImage',
        }]
      })
      fullUserWithoutPassword.update({ state: 'online' });
      return res.json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post('/logout', async (req, res, next) => {
  const user = await User.findOne({ where: { id: req.user.id } });
  if (user) {
    user.update({ state: 'offline' });
  }
  req.session.destroy();
  res.send('ok');
})

router.post('/addFriend', async (req, res, next) => {
  try {
    const nickname = req.body.nickname;
    const tag = req.body.tag;
    const user = await User.findOne({
      where: { id: req.user.id },
      attributes: ['id'],
    })
    if (!user) {
      return res.status(403).send('인증 실패');
    }
    const receiver = await User.findOne({
      where: {
        nickname,
        tag,
      },
      attributes: ['id'],
    })
    if (!receiver) {
      return res.status(403).send('그런 태그의 사용자는 없습니다.');
    }

    await user.addReceivers(receiver.id);
    res.status(200).send({ sender: user.id, receiver: receiver.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.get('/loadFriends', async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      res.status(403).send('존재하지 않는 사용자입니다.');
    }
    const friends = await user.getFriends({
      attributes: {
        exclude: ['email', 'password'],
      },
      include: [{
        model: db.Image,
        as : 'ProfileImage',
      }]
    });
    res.status(200).json(friends);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.get('/loadWaitingFriends', async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: req.user.id } });
    if (!user) {
      res.status(403).send('존재하지 않는 사용자입니다.');
    }
    const receivers = await user.getReceivers({
      attributes: {
        exclude: ['email', 'password'],
      },
    });
    const senders = await user.getSenders({
      attributes: {
        exclude: ['email', 'password'],
      },
      include: [{
        model: db.Image,
        as : 'ProfileImage',
      }]
    })
    res.status(200).json({ receivers, senders });
  } catch (error) {
    console.error(error);
    next(error);
  }
})


router.post('/acceptFriend/:senderId', async (req, res, next) => {
  try {
    const sender = await User.findOne({ where: { id: parseInt(req.params.senderId) } });
    await sender.removeReceivers(req.user.id); // 요청 삭제
    await sender.addFriends(req.user.id); // sender -> user 친구 등록
    const user = await User.findOne({ where: { id: parseInt(req.user.id) } });
    await user.addFriends(req.params.senderId); // user -> sender 친구 등록
    res.status(200).json({ senderId: req.params.senderId, receiverId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/friendRequest/sender/:senderId', async (req, res, next) => {
  try {
    const sender = await User.findOne({ where: { id: parseInt(req.params.senderId) } });
    await sender.removeReceivers(req.user.id);
    res.status(200).json({ senderId: req.params.senderId, receiverId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
})

router.delete('/friendRequest/receiver/:receiverId', async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { id: parseInt(req.user.id) } });
    await user.removeReceivers(req.params.receiverId);
    res.status(200).json({ senderId: req.user.id, receiverId: req.params.receiverId });
  } catch (error) {
    console.error(error);
    next(error);
  }
})



module.exports = router;