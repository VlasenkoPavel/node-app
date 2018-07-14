import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Test {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        length: 100
    })
    public name: string;

    @Column('text')
    public description: string;
}
