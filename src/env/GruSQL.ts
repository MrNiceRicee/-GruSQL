import 'dotenv/config';
import { Pool } from 'pg';
import theSauce from './TheSauce';

// const connectionString = process.env.DB_URL;

interface Config {
  user?: string;
  password?: string;
  database?: string;
  host?: string;
  port: number;
  allowExitOnIdle?: boolean;
  max?: number;
}

const config: Config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT || 5432),
};

const pool = new Pool(config);
type saucyString = keyof typeof theSauce;

const replaceStrings = (input: string) => {
  console.log(input);
  // const test = input.replace(theSauce.SELECT.expression, theSauce.SELECT.replace);
  const test = Array.from(theSauce.keys()).reduce((previous, current) => {
    return previous.replace(
      theSauce.get(current)?.expression || '',
      theSauce.get(current)?.replace || ''
    );
  }, input);
  console.log('test', test);
};

const queryOne = async (
  text: string,
  values?: Array<string | number> | undefined
) => {
  const result = await pool.query(text, values);
  return result?.rows?.[0];
};

const queryRows = async (
  text: string,
  values?: Array<string | number> | undefined
) => {
  replaceStrings(text);
  const result = await pool.query(text, values);
  return result?.rows;
};

const query = async (
  text: string,
  values?: Array<string | number> | undefined
) => pool.query(text, values);

export { query, queryOne, queryRows };
