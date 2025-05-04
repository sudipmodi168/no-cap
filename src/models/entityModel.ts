import { DataTypes, Model, Sequelize, Optional } from 'sequelize';

// Define the attributes of a generic entity (can be extended dynamically via metadata)
export interface EntityAttributes {
  id: number;
  name: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Sequelize needs the `id` to be optional for creation
export interface EntityCreationAttributes extends Optional<EntityAttributes, 'id'> {}

// Sequelize Model definition
export class Entity extends Model<EntityAttributes, EntityCreationAttributes>
  implements EntityAttributes {
  public id!: number;
  public name!: string;
  public status?: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Function to initialize the model
export function initEntityModel(sequelize: Sequelize): typeof Entity {
  Entity.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      status: {
        type: new DataTypes.STRING(32),
        allowNull: true,
      },
    },
    {
      tableName: 'entities',
      sequelize,
      timestamps: true,
    }
  );

  return Entity;
}
