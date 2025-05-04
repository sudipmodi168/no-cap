// entityMetadata.ts
export interface FieldDefinition {
    name: string;
    type: string;
    required?: boolean;
    default?: any;
    validationRules?: string[];
    ui?: {
      controlType: string;
      visible: boolean;
      readOnly: boolean;
    };
  }
  
  export interface EntityMetadata {
    entityName: string;
    fields: FieldDefinition[];
  }
  