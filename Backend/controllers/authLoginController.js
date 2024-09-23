import check_user from "../procedures/user/check_user.js";

export const login = async(req, res) => {
  const {username, password} = req.body;

  // Revisar que lois tipos de datos sean los correctos
  if (typeof dni !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ msg: 'Invalid data types' });
  }

  try {
    // Verificar las credenciales del usuario
    const valid = await check_user({
      username: 'Anfelesan',
      password: 80
    });

    console.log("VALID = " + valid);

    return res.status(200).json({
      response: valid
    })

  } catch (error) {
    console.log(error);
  }
}