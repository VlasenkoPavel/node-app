import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Test {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    name: string;

    @Column('text')
    description: string;
}
