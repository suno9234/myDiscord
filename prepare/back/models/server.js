
module.exports = (sequelize,DataTypes)=>{
  const Server = sequelize.define('Server',{ // mysql user +s => users
    // id 기본 생성
  },{
    charset : 'utf8mb4',
    collate: 'utf8mb4_general_ci',

  })
  Server.associate = (db)=>{
    
  };
  return Server;
}