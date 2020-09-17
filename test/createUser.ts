import {User} from '../src/logic/interfaces/User';

export function createUser(): User {
  return {
    name: 'Jhon Doe',
    avatar: '/images/avatars/jhon-doe.jpg',
    username: 'jhon-doe'
  }
}
