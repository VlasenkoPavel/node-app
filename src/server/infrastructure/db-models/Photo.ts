import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        length: 100
    })
    public name: string;

    @Column('text')
    public description: string;

    @Column('text')
    public filename: string;

    @Column()
    public views: number;

    @Column()
    public isPublished: boolean;
}
