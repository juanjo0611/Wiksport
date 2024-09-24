import { useEffect, useState } from "react"
import { GET } from "../services/CRUD/GET"
import { ROLES } from "../data/data"

export const useWho = () => {
  const [info, setInfo] = useState({})

  const updateInfo = async () => {
    try {
      const response = await GET({
        resource: '/auth/who-am-i'
      })
      setInfo(response.content)
      if (response.content.role == ROLES.GENERAL) {
        window.localStorage.removeItem('token')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    updateInfo()
  }, [])

  return {who: info}
}