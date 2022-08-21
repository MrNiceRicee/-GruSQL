import { queryRows } from './env/GruSQL';
import { User } from './util/generate/users';

const possibleNames = [
  'Pee Pee',
  'Poo Poo',
  'Potato',
  'Josh',
  'Nicole',
  'Cristal',
  'Christian',
  'Konz',
];

// const createUser = async () => {
//   return Promise.all(possibleNames.map((name) => User({ name })));
// };

const readUsers = async () => {
  return queryRows(`
    SELECT name FROM "Users"
  `);
};

const main = async () => {
  // console.log("hello");
  try {
    // await createUser();
    const users = await readUsers();

    console.table(users);
  } catch (err) {
    console.error(err);
  }
};

main();

export default main;
