import check_user from "../procedures/user/check_user.js";
import get_info_user from "../procedures/user/get_info_user.js";

export const login = async(req, res) => {
  // const {username, password} = req.body;
  const username = 'username';
  const password = 'password';

  // Revisar que los tipos de datos sean los correctos
  if (typeof username !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ msg: 'Invalid data types' });
  }

  try {
    // Verificar las credenciales del usuario
    const valid = await check_user({
      username: username,
      password: password
    });
    if (!valid) {
      return res.status(406).json({ msg: 'Incorrect credentials' });
    }
  
    const user_data = await get_info_user({ username });
    console.log(user_data);

    return res.status(200).json({
      response: valid
    })

  } catch (error) {
    console.log(error);
  }
}