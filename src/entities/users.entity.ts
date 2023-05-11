import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


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

    @BeforeInsert() 
    @BeforeUpdate()
    hashPassword() { 

   const isEncrypted: number = getRounds(this.password); 

   if (!isEncrypted) {
      // Adicionando ao objeto que irá para o banco a senha criptografada
      this.password = hashSync(this.password, 10);
   }
}
}

export default User