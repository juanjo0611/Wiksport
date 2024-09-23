import { callFunction } from "../../config/call_function.js";

const check_user = async ({username, password}) => {
  try {
    const response = await callFunction({
      functionName: 'login_user',
      params: [username, password]
    });
    return response;
  }
  catch (error) {
    console.log(error);
  }
}
export default check_user;