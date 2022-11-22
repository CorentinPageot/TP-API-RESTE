import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { create } from "domain";

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 'user-1',
      adresse: '8 avenue des Champs Elysées',
      firstName: 'david',
      lastName: 'dupont',
      email: 'david.dupont@gmail.com',
      hobbies: [
        'Cuisine',
        'Lecture',
      ],
      creationDate: new Date(),
    },
    {
      id: 'user-2',
      adresse: '3 impasse du chêne',
      firstName: 'cyril',
      lastName: 'gane',
      email: 'cyril.gane@orange.fr',
      hobbies: [
        'MMA',
        'Boxe thai',
        'Musculation',
      ],
      creationDate: new Date(),
    },
  ];

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user: User = {
      id: `user-${this.users.length}`,
      adresse: createUserInput.adresse ?? '',
      firstName: createUserInput.firstName,
      lastName: createUserInput.lastName,
      email: createUserInput.email,
      hobbies: createUserInput.hobbies,
      creationDate: new Date(),
    };
    this.users.push(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
