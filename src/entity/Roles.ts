import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./Users";

@Entity()
export class Roles {
    @PrimaryGeneratedColumn()
    roleId: number;
    @Column()
    roleName: string;
    @OneToMany(() => Users, (user) => user.roles)
    users: Users[];
}