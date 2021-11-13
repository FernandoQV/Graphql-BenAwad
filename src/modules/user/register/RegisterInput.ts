import { Field, InputType } from "type-graphql"
import {  IsEmail, Length  } from 'class-validator'
import { IsEmailAlreadyExist } from "./isEmailAlreadeyExist"


@InputType()
export class RegisterInput{
    @Field()
    
    @Length(1,100,{message:'No puede estar vacio este campo'})//message es para indicar el mensaje de error que se mostarara
    firstName: string
    
    @Field()
    @Length(1,100,{message:'No puede estar vacio este campo'})
    lastName: string
    
    @Field()
    @IsEmail()
    @IsEmailAlreadyExist({message:`email already in used`})
    email: string
    
    @Field() 
    password: string
}