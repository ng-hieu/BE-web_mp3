import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "./Roles";

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    userId: number;
    @Column()
    userEmail: string;
    @Column()
    userName: string;
    @Column()
    userPhone: string;
    @Column()
    userPassword: string;
    // @Column()
    // userRePassword: string;
    @ManyToOne(() => Roles, (roleId) => roleId.users)
    roleId: number;
}