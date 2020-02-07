//src/services/pokemon.service.ts

import { Request, Response } from "express";
import { WELCOME_MESSAGE } from "../constants/hezflixApi.constants";

export class HezflixService {
  public welcomeMessage(req: Request, res: Response) {
    return res.status(200).send(WELCOME_MESSAGE);
  }
}