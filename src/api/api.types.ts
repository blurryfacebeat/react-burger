export enum OrderStatus {
  CREATED = 'created',
  PENDING = 'pending',
  DONE = 'done',
}

export type TOrderItem = {
  _id: string;
  ingredients: string[];
  status: OrderStatus;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v: number;
};
