import { Entity } from "../business/entity";

export class UIComponent {
  private entity: Entity;

  constructor(entity: Entity) {
    this.entity = entity;
  }

  render(): void {
    // Generate UI5 components dynamically based on entity data
    // For example, if the entity has a `name` field, create an input field for it
    const inputName = new sap.m.Input({
      value: this.entity.getData().name,
      placeholder: "Enter Name",
    });

    inputName.placeAt("content"); // Assuming "content" is the ID of an HTML container
  }
}
