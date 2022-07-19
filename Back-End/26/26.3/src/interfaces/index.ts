export interface User {
    name: string;
    email: string;
    password: string;
}

// export type UserPreview = Omit<User, "id">;

export interface IUser extends User {
    id: number;
  }

  export interface IdUser {
    id: number;
  }