// queryMetadata.ts
export interface QueryMetadata {
    queryId: string;
    entity: string;
    filters: string[];      // e.g. ["status = :status"]
    sort?: string[];        // e.g. ["created_at DESC"]
    joins?: string[];
  }
  