import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Game } from './Game'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ type: 'text' })
	name: string

	@Column({ type: 'text', unique: true })
	email: string

	@Column({ type: 'text' })
	password: string

	@OneToMany(() => Game, game => game.user)
	games: Game[]
}
