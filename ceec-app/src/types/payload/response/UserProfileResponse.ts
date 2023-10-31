export interface UserProfile extends Profile {
    email: string;
    role_id: number;
    expired_at: Date | null;
}

export interface Profile {
    first_name: string;
    last_name: string;
    document_number: number;
    phone: number;
    DocumentType: DocumentType;
}

export interface DocumentType {
    name: string;
}

