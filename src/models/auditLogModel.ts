// auditLogModel.ts
export interface AuditLog {
    logId: string;
    entity: string;
    entityId: string;
    operation: "CREATE" | "UPDATE" | "DELETE";
    changedBy: string;
    changedAt: Date;
    changes: Record<string, any>;
  }
  