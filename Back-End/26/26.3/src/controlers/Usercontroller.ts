import { Request, Response } from 'express';

// import { UserCredentials, IUser } from '../interfaces';
import * as userService from '../services/Userservice';

export async function getAll(_req: Request, res: Response) {
  const user = await userService.getAll();
 return res.status(200).json(user);
}

export async function getbyID(req: Request, res: Response) {
    const { id } = req.params;
    const user = await userService.getbyID(id);
   return res.status(200).json(user);
  }

  export async function createUser(req: Request, res: Response) {
    const { name, email, password} = req.body;
    const user = await userService.createUser(name, email, password);
   return res.status(200).json(user);
  }
  export async function updateUser(req: Request, res: Response) {
    const { name, email, password} = req.body;
    const { id } = req.params;
    const user = await userService.updateUser(name, email, password, Number(id));
   return res.status(200).json(user);
  }

  export async function deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    await userService.deleteUser(Number(id));
   return res.status(204).end();
  }