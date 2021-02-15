import { hash } from 'bcryptjs';
import { Entity, Column, BeforeInsert } from 'typeorm';

import { ExtendedBaseEntity } from './Base';

@Entity('users')
export class User extends ExtendedBaseEntity {
	@Column('text')
	name: string;

	@Column('text', { unique: true })
	email: string;

	@Column('text')
	password: string;

	@Column()
	tokenVersion: number = 0;

	token: string;

	@BeforeInsert()
	async hashPass() {
		this.password = await hash(this.password, 10);
	}
}
