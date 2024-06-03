
export interface KeyCategoriesType {
  id: number;
  keyCategoryName: string;
  keyDescription: string; 
  securityLevel: string;
}
export interface KeyType {
  id: number;
  keyName: string;
  keyInstruction: string;
  manufacturer: string;
  price: number;
  keyCategory: KeyCategoriesType;
}

export interface CreateKey{
  id: number;
  keyName: string;
  keyInstruction: string;
  manufacturer: string;
  price: number;
}
