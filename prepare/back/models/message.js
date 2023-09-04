module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', { // mysql user +s => users
    // id 기본 생성
    content: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  })
  Message.associate = (db) => {
    db.Message.belongsTo(db.ChattingChannel);
    db.Message.belongsTo(db.User);
  };
  return Message;
}