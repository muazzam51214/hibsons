export interface UserInterface {
  name: string;
  email: string;
  password: string;
  role: string;
  avatar?: string;
}
export interface UserUpdateInterface {
  name: string;
  email: string;
  role: string;
}

export interface UserNew {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
  createdAt?: Date;
  updatedAt?: Date;
}