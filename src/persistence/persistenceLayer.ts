import { Entity } from "../business/entity";
import { Sequelize, Model, DataTypes } from 'sequelize';

// Initialize Sequelize for MySQL (as an example)
const sequelize = new Sequelize('mysql://user:password@localhost:3306/your_db_name');

// Define a model for the Entity (database schema)
class EntityModel extends Model {
  public id!: string;
  public name!: string;
  public data!: any;
}

EntityModel.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Entity',
    tableName: 'entities',
    timestamps: true,
  }
);

// CRUD operations for persistence layer
export class PersistenceLayer {
  static async create(entity: Entity): Promise<void> {
    try {
      const entityData = entity.getData();
      await EntityModel.create({
        id: entity.id,
        name: entityData.name,
        data: entityData,
      });
    } catch (error) {
      console.error('Error creating entity:', error);
      throw new Error('Failed to create entity');
    }
  }

  static async update(entity: Entity): Promise<void> {
    try {
      const entityData = entity.getData();
      await EntityModel.update(
        {
          name: entityData.name,
          data: entityData,
        },
        {
          where: { id: entity.id },
        }
      );
    } catch (error) {
      console.error('Error updating entity:', error);
      throw new Error('Failed to update entity');
    }
  }

  static async delete(entity: Entity): Promise<void> {
    try {
      await EntityModel.destroy({
        where: { id: entity.id },
      });
    } catch (error) {
      console.error('Error deleting entity:', error);
      throw new Error('Failed to delete entity');
    }
  }
}
