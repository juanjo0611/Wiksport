import { callProcedure } from "../../config/call_procedure.js"

const get_info_user = async ({ username }) => {
  try {
    const response = await callProcedure({
      procedureName: 'info_user',
      params: [username],
    });
    return response;
  }
  catch (error) {
    console.log(error);
  }
}
export default get_info_user;
