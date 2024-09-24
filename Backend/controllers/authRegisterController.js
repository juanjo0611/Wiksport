import create_user from "../procedures/user/create_user.js";

export const register = async(req, res) => {
  const {
    username,
    name,
    surname,
    weight,
    height,
    age,
    img,
    password
  } = req.body;

  try {
    const response = await create_user({
      username,
      name,
      surname,
      weight,
      height,
      age,
      img,
      password
    });
    return res.status(200).json(response);
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Something was wrong' });
  }
}