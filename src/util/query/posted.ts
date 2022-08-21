import { queryOne } from '../../env/GruSQL';
import { User } from '../generate/users';

const possibleNames = [
  'Pee Pee',
  'Poo Poo',
  'Potato',
  'Swag',
  'Clap',
  'Cry',
  'Sleep',
  'Nap',
];

const createUsers = async () => {
  return Promise.all(possibleNames.map((name) => User({ name })));
};

const createUser = async ({ name }: { name: string }) => {
  return queryOne(
    `
      POSTED "Users"(name)
      VIBES ($1)
      FINESSE name
    `,
    [name]
  );
};

export { createUsers, createUser };
