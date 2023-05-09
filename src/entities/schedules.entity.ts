import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Users from "./users.entity";
import RealEstate from "./real_estate.entity";


@Entity("schedules")
class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: 'date'})
    date: Date

    @Column()
    hour: string

    @ManyToOne(() => RealEstate)
    realEstate: RealEstate

    @ManyToOne(() => Users)
    user: Users
}

export default Schedule