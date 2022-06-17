// import connection from '../models/connection'
import * as userModel from '../models/usermodel'
// import { User } from '../interfaces/index'

export async function getAll() {
    const data = await userModel.getAll();
    return data;
  }

  export async function getbyID(id: string) {
    const [data] = await userModel.getbyID(id);
    return data;
  }

  export async function createUser(name: string, email: string, password: string) {
    const data = await userModel.createUser(name, email, password);
    console.log(data);
    return data;
  }

  export async function updateUser(name: string, email: string, password: string, id: number){
    const data = await userModel.editUser(name, email, password, id);
    console.log(data);
    return data;
  }

  export async function deleteUser(id: number){
    const data = await userModel.deleteUser(id);
    // console.log(data);
    return data;
  }