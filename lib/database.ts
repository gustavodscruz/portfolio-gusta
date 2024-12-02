import mysql from 'mysql2/promise';

const DB_HOST : string = process.env.DB_HOST as string;
const DB_USER : string = process.env.DB_USER as string;
const DB_PASSWORD : string = process.env.DB_PASSWORD as string;
const DB_NAME : string = process.env.DB_NAME as string;
const DB_PORT : number | null = parseInt(process.env.DB_PORT || '') ?? null;



const connection = async() => await mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT
});

export default connection;
