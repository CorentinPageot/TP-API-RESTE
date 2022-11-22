import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @MaxLength(30)
  firstName: string;

  @Field()
  @MaxLength(30)
  lastName: string;

  @Field()
  @MaxLength(30)
  email: string;

  @Field()
  @Length(30, 255)
  adresse?: string;

  @Field((type) => [String])
  hobbies: string[];
}
