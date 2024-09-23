import { getConnection } from "./db.js";

const wrapIfString = (str) => {
  if (typeof str === 'string') {
    return ('"' + str + '"');
  }
  return str;
}

const textQueryProcedure = ({procedureName, params}) => {
  const wrapped = params.map(param => wrapIfString(param));
  const textParams = wrapped.join(', ');
  return `CALL ${procedureName}(${textParams})`;
}

export const callProcedure = async({ procedureName, params }) => {
  let connection;
  try {
    connection = await getConnection();
    const textQuery = textQueryProcedure({
      procedureName,
      params
    });
    const [results, fields] = await connection.query(
      textQuery
    );
    const response = results?.[0] ?? results;
    return response;
  }
  catch (error) {
    console.log(error);
  }
  finally {
    if (connection) connection.end();
  }
}