import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Test {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        length: 100
    })
    public name: string;

    @Column('text')
    public description: string;
}

export default Test
