
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { // mysql user +s => users
    // id 기본 생성
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    tag: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  })
  User.associate = (db) => {

    db.User.hasOne(db.Image, { as: 'ProfileImage' });
    db.User.belongsToMany(db.ChattingChannel, { through: 'UserChannel' });
    db.User.hasMany(db.Message);

    db.User.belongsToMany(db.User, { through: 'FriendRequest', as: 'Senders', foreignKey: 'ReceiverId' });
    db.User.belongsToMany(db.User, { through: 'FriendRequest', as: 'Receivers', foreignKey: 'SenderId' });

    db.User.belongsToMany(db.User, { through: 'Friend', as: 'Users', foreignKey: 'FriendId' });
    db.User.belongsToMany(db.User, { through: 'Friend', as: 'Friends', foreignKey: 'UserId' });
  };
  return User;
}