import { useEffect, useState } from "react"
import { GET } from "../services/CRUD/GET"

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState({})

  const setUserData = async () => {
    const urlResource = '/user/user-info'
    const user = await GET({
      resource: urlResource
    })
    setUserInfo(user)
    console.log(user)
  }
  useEffect(() => { setUserData() }, [])
  return {userInfo}
}