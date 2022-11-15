import { AppDataSource } from "../data-source";
import { Game } from "../entities/Game";

export const gameRepository = AppDataSource.getRepository(Game)