import jwt from "jsonwebtoken";
import { ROLES, SECRET } from "../utilities/globalVariables.js";

export const whoAmI = async (req, res) => {
  const token = req.header('x-auth-token') ?? '';

  try {
    const token_content = jwt.verify(token, SECRET);
    res.status(200).json({
      content: {
        username: token_content?.content?.username,
        img: token_content?.content?.img,
        role: ROLES.USER,
      }
    });
  }
  catch (error) {
    return res.status(200).json({
      content: {
        role: ROLES.GENERAL
      }
    })
  }
}