import { queryOne } from '../../env/GruSQL';

const User = ({ name = 'someguy' }: { name: string }) => {
  return queryOne(
    `
    POSTED "Users"(name)
    VIBES ($1)
    RETURNING *`,
    [name]
  );
};

const placeholder = () => null;
export { User, placeholder };
