import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Users from "./users.entity";
import Address from "./addresses.entity";
import Category from "./categories.entity";

@Entity("real_estate")
class RealEstate {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "boolean", default: false })
  sold: boolean;

  @Column({ type: "decimal", default: 0 })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: 'date'})
  createdAt: string;

  @UpdateDateColumn({ type: 'date'})
  updatedAt: string;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address

  @ManyToOne(() => Category)
  category: Category;
}

export default RealEstate;
