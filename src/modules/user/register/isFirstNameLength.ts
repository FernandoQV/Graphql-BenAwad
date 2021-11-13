import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    
  } from 'class-validator';


  
  @ValidatorConstraint({ async: true })
  export class IsFirstNameLengthConstraint implements ValidatorConstraintInterface {
    validate(firstName:string){
       return firstName.length>6?true:false
    }
  }
  
  export function isFirstNameLength(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsFirstNameLengthConstraint,
      });
    };
  }
  