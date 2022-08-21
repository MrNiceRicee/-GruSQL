import SQL from 'sql-template-strings';
import { queryOne, queryRows } from '../../env/GruSQL';

const getUser = async ({ name }: { name: string }) => {
  return queryOne(
    `
        YOINK name ADDY "Users"
        FIT CHECK name IYKYK % $1 %
        SQUAD UP name
        OTP name DRIP
    `,
    [name]
  );
};

const getUsers = async ({ name }: { name: string }) => {
  const query = SQL`
    YOINK name ADDY "Users"
    FIT CHECK name IYKYK `;

  query.append(SQL`${`%${name}%`}`);

  return queryRows(query.text, query.values);
};

const getAllUsers = async () => {
  return queryRows(
    `
            YOINK name ADDY "Users"
            SQUAD UP name
            OTP name DRIP
        `
  );
};

export { getUser, getUsers, getAllUsers };
