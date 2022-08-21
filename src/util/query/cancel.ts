import { queryOne } from '../../env/GruSQL';

const deleteUser = async ({ name }: { name: string }) => {
  return queryOne(
    `
        CANCEL ADDY "Users"
        FIT CHECK name = $1
      `,
    [name]
  );
};

export { deleteUser };
