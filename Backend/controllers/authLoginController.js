import check_user from "../procedures/user/check_user.js";
import get_info_user from "../procedures/user/get_info_user.js";
import { ROLES, SECRET, TOKEN_EXP_TIME } from "../utilities/globalVariables.js";
import jwt from 'jsonwebtoken'

export const login = async(req, res) => {
  const {username, password} = req.body;

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

    console.log ("username = " + username);
    console.log("password = " + password);

    if (!valid) {
      return res.status(406).json({ msg: 'Incorrect credentials' });
    }
  
    const user_data_list = await get_info_user({ username });
    const user_data = user_data_list[0];
    
    console.log(user_data);

    const payload = {
      content: {
        id: user_data.Id_usuario,
        username: user_data.Username,
        img: user_data.Imagen,
        role: ROLES.USER
      }
    }
    jwt.sign(
      payload,
      SECRET,
      {expiresIn: TOKEN_EXP_TIME},
      (error, token) => {
        if (error) throw error;
        // Confirm Message
        res.status(200).json({ token });
      }
    )
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Something was wrong' });
  }
}