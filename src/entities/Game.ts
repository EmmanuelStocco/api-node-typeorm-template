import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('games')
export class Game {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text'})
    name: string

    @ManyToOne(() => User, user => user.games)
    @JoinColumn({name: 'user_id'})
    user: User
}