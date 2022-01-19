import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Photo } from "src/photos/photo.entity";


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({default: true})
  isAction: boolean;

  // @OneToMany((type)=> Photo, (photo) => photo.user)
  // photos: Photo[];
}