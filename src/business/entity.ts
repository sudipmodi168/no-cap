export class Entity {
    private id: string;
    private data: any;
  
    constructor(id: string, data: any) {
      this.id = id;
      this.data = data;
    }
  
    // Method to return the data (for saving, updating, or deleting)
    getData() {
      return this.data;
    }
  
    // Method to validate the entity data before committing it
    validate() {
      // Implement validation logic based on entity type
      if (!this.data.name) {
        throw new Error('Name is required');
      }
    }
  
    // Additional entity methods can be added based on the business rules
  }
  