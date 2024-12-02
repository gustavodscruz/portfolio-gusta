import mysql from "mysql2/promise";

const DB_HOST: string = process.env.DB_HOST as string;
const DB_USER: string = process.env.DB_USER as string;
const DB_PASSWORD: string = process.env.DB_PASSWORD as string;
const DB_NAME: string = process.env.DB_NAME as string;
const DB_PORT = parseInt(process.env.DB_PORT || "3306", 10);

const connection = async () => {
  try {
    console.log("DB_HOST:", DB_HOST);
    console.log("DB_USER:", DB_USER);
    console.log("DB_PASSWORD:", DB_PASSWORD);
    console.log("DB_NAME:", DB_NAME);
    console.log("DB_PORT:", DB_PORT);

    
    return await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: DB_PORT,
    });
  } catch (error) {
    console.error("Erro ao estabelecer conexão com o banco de dados:", error);
    throw error; // Re-lança o erro para ser tratado onde a função for chamada
  }
};

export default connection;
