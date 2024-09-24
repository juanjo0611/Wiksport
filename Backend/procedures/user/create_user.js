import { callProcedure } from "../../config/call_procedure.js";

const create_user = async ({
  username,
  name,
  surname,
  weight,
  height,
  age,
  img,
  password
}) => {
  try {
    const response = await callProcedure({
      procedureName: 'create_user',
      params: [username, password, img, name, surname, weight, height, age]
    });
    return response;
  }
  catch (error) {
    console.log(error);
  }
}
export default create_user;