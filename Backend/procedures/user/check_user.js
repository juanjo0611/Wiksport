import { callProcedure } from "../../config/call_procedure.js"

const check_user = async ({username, password}) => {
  try {
    const response = await callProcedure({
      procedureName: 'login_user',
      params: [username, password]
    });
    return response;
  }
  catch (error) {
    console.log(error);
  }
}
export default check_user;