// ./models/book.model.ts

import connection from './connection';
import { User, IUser, IdUser } from '../interfaces/index';
import { ResultSetHeader } from 'mysql2';

export async function getAll(): Promise<User[]> {
    const query = 'SELECT * FROM Users';
  
    const [users] = await connection.execute(query);
    return users as User[];
  }

  export async function getbyID(id: string): Promise<User[]> {
    const query = 'SELECT * FROM Users WHERE id= ?';  
    const [users] = await connection.execute(query, [id]);
    return users as User[];
  }

  export async function createUser(name: string , email: string, password: string): Promise<User> {
    const query = `INSERT INTO Users (name, email, password) VALUES (?, ?, ?)`;
    const [result] = await connection.execute<ResultSetHeader>(query, [name, email, password]);
    const { insertId: id } = result;
    const newUser: IUser = { id, name, email, password };
    return newUser;
  }

  export async function editUser(name: string , email: string, password: string, idUser: number): Promise<User> {
    const query = `UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?`;
    const [result] = await connection.execute<ResultSetHeader>(query, [name,email, password,idUser]);
    const { insertId: id } = result;
    const newUser: User = { name,email, password};
    return newUser;
  }
  export async function deleteUser(idUser: number): Promise<IdUser> {
    const query = 'DELETE FROM Users WHERE id = ?';
    const [result] = await connection.execute<ResultSetHeader>(query, [idUser]);
    const { insertId: id } = result;
    const newUser: IdUser = { id };
    return newUser;
  }