import { queryOne } from '../../env/GruSQL';

const updateUser = async ({
  name,
  newName,
}: {
  name: string;
  newName: string;
}) => {
  return queryOne(
    `
        GLOW UP "Users"
        BET name=$1
        FIT CHECK name=$2
        FINESSE name
    `,
    [newName, name]
  );
};

export { updateUser };
