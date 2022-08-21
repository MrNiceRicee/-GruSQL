import { queryOne } from '../../env/connection';

const User = ({ name = 'someguy' }: { name: string }) => {
  return queryOne(
    `
    INSERT INTO "Users"(name)
    VALUES ($1)
    RETURNING *`,
    [name]
  );
};

const placeholder = () => null;
export { User };
