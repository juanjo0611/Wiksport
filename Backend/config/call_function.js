import { getConnection } from "./db.js";

const wrapIfString = (str) => {
  if (typeof str === 'string') {
    return ('"' + str + '"');
  }
  return str;
}

const textQueryProcedure = ({functionName, params}) => {
  const wrapped = params.map(param => wrapIfString(param));
  const textParams = wrapped.join(', ');
  return `SELECT ${functionName}(${textParams}) AS RESULT`;
}

export const callFunction = async({ functionName, params }) => {
  let connection;
  try {
    connection = await getConnection();
    const textQuery = textQueryProcedure({
      functionName,
      params
    });
    const [results, fields] = await connection.query(
      textQuery
    );
    const response = results?.[0] ?? results;
    return Boolean(response.RESULT);
  }
  catch (error) {
    console.log(error);
  }
  finally {
    if (connection) connection.end();
  }
}