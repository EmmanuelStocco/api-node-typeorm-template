import { Request, Response } from "express";
import { gameRepository } from "../repositories/gameRepository";
import { userRepository } from "../repositories/userRepository";

export class GameController {
    async create(req: Request, res: Response) {
        const {
            name
        } = req.body;
        const { idUser } = req.params;

        if (!idUser) {
            return res.status(400).json({ message: 'O nome é obrigatório' })
        }

        try {
            const user = await userRepository.findOneBy({ id: Number(idUser) })

            if (!user) {
                return res.status(404).json({ message: 'Usuário não existe' })
            }

            const newGame = gameRepository.create({
                name
            });
            await gameRepository.save(newGame);
            return res.status(201).json(newGame)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error' })
        }
    };
}