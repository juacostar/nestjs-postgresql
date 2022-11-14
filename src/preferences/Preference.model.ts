import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('preference')
export class Preference{
    
    @PrimaryGeneratedColumn({
        name:'id'
    })
    id: number;

    @Column({
        name: 'name'
    })
    name: string;

    @Column({
        name: 'restaurant'})
    restaurant:string;
}