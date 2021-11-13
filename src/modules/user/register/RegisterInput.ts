import { Field, InputType } from "type-graphql"
import {  IsEmail, Length  } from 'class-validator'
//import { IsEmailAlreadyExist } from "./isEmailAlreadeyExist"
import { isFirstNameLength } from "./isFirstNameLength"


@InputType()
export class RegisterInput{
    
    //@Length(1,100,{message:'No puede estar vacio este campo'})//message es para indicar el mensaje de error que se mostarara
    @Field()
    @isFirstNameLength({message:'FirstName min length 6 characteres'})
    firstName: string
    
    @Field()
    @Length(1,100,{message:'No puede estar vacio este campo'})
    lastName: string
    
    @Field()
    @IsEmail()
    //@IsEmailAlreadyExist({message:`email already in used`})
    email: string
    
    @Field() 
    password: string
}