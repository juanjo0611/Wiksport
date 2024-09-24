import get_info_user from "../procedures/user/get_info_user.js"

export const getUserInfo = async (req, res) => {
  const username = req?.username
  try {
    const response = await get_info_user({ username });
    return res.status(200).json(response[0])
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({ msg: 'Something was wrong' });
  }
}