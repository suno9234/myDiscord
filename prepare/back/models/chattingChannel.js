module.exports = (sequelize, DataTypes) => {
  const ChattingChannel = sequelize.define('ChattingChannel', { // mysql user +s => users
    // id 기본 생성
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  }, {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  })
  ChattingChannel.associate = (db) => {
    db.ChattingChannel.belongsToMany(db.User, { through: 'UserChannel' });
    db.ChattingChannel.hasMany(db.Message);
  };
  return ChattingChannel;
}