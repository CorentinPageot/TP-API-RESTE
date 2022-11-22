import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  adresse?: string;

  @Field()
  creationDate: Date;

  @Field((type) => [String])
  hobbies: string[];
}
