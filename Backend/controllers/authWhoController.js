import { jwt } from "jsonwebtoken";
import { ROLES, SECRET } from "../utilities/globalVariables";

export const whoAmI = async (req, res) => {
  const token = req.header('x-auth-token') ?? '';

  try {
    const token_content = jwt.verify(token, SECRET);
    res.status(200).json({
      content: {
        name: token_content.name,
        img: token_content.img,
        role: ROLES.USER,
      }
    });
  }
  catch (error) {
    res.status(200).json({
      content: {
        role: ROLES.GENERAL
      }
    })
  }
}