const { Model, DataTypes } = require('sequelize');

const ROLE_TABLE = 'roles';

const RoleSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
};

class Role extends Model {
  static associate() {
    // Asociar
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLE_TABLE,
      modelName: 'Role',
      timestamps: false,
    };
  }
}

module.exports = { Role, RoleSchema, ROLE_TABLE };
