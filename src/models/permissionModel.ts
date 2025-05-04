// permissionModel.ts
export interface Permission {
    permissionId: string;
    entity: string;
    operation: "READ" | "WRITE" | "DELETE";
    roleId: string;
  }
  