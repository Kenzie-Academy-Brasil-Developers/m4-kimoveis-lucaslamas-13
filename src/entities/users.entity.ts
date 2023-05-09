import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("users")
class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: 'varchar', length: 45})
    name: string;

    @Column({ type: 'varchar', length: 45, unique: true})
    email: string;

    @Column({type: 'boolean', default: false})
    admin: boolean;

    @Column({type: 'varchar', length: 120})
    password: string;

    @CreateDateColumn({type: "date"})
    createdAt: Date | string;

    @UpdateDateColumn({type: "date"})
    updatedAt: Date | string;

    @DeleteDateColumn({nullable: true, type: "date"})
    deletedAt: Date | null | undefined;
}

export default User