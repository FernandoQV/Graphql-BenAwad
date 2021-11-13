import { Field, ID, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(()=>ID)
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column()
  firstName: string;
  
  @Field()
  @Column()
  lastName: string;
  
  @Field()//si no se agrega el decorador @Column, este sera como los campos calculados que vi en el video de Midudev o algo parecido
  name:String

  @Field()
  @Column("text", { unique: true })
  email: string;
  
  @Column()//si no se coloca el decorador @Field no se vera en la documentacionde graphql
  password: string;
}
