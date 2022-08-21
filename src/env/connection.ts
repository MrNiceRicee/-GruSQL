import 'dotenv/config';
import { Pool } from 'pg';

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

const queryOne = async (text: string, values?: Array<string | number>) => {
  const result = await pool.query(text, values);
  return result?.rows?.[0];
};

const queryRows = async (text: string, values?: Array<string | number>) => {
  const result = await pool.query(text, values);
  return result?.rows;
};

const query = async (text: string, values?: Array<string | number>) =>
  pool.query(text, values);

export { query, queryOne, queryRows };
