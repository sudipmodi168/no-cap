import { Entity } from "../business/entity";
import { PersistenceLayer } from "../persistence/persistenceLayer";

export class Transaction {
  private dirtyEntities: Entity[] = [];
  
  // Start a new transaction
  static async createTransaction(): Promise<Transaction> {
    // Initialize the transaction, perform any setup
    return new Transaction();
  }

  // Add entity to transaction (track modified entities)
  addEntity(entity: Entity): void {
    this.dirtyEntities.push(entity);
  }

  // Commit the transaction (save changes)
  async commit(): Promise<void> {
    try {
      // Validate all dirty entities
      for (const entity of this.dirtyEntities) {
        entity.validate();
      }
      
      // Save to the persistence layer
      for (const entity of this.dirtyEntities) {
        await PersistenceLayer.create(entity);
      }
      console.log("Transaction committed successfully.");
    } catch (error) {
      console.error("Error during commit:", error);
      await this.rollback();
    }
  }

  // Rollback the transaction (revert changes)
  async rollback(): Promise<void> {
    console.log("Rolling back transaction.");
    // Logic to revert all changes, depending on the framework needs
  }
}
