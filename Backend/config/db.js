import { createConnection } from "mysql2/promise";
import { DB_INFO } from "../utilities/globalVariables.js";
import { DB_CREDENTIALS } from "../utilities/globalVariables.js";


export async function getConnection() {
  try {
    return await createConnection({
      host: DB_INFO.HOST,
      port: DB_INFO.PORT,
      database: DB_INFO.NAME,
      user: DB_CREDENTIALS.user,
      password: DB_CREDENTIALS.password
    })
  }
  catch (e) {
    console.log(e);
    throw new Error;
  }
}