import { useState } from "react"

const useLogin =() => {
const [isAuthenticated, setAuthenticated] = useState(false)
const [isLoading, setLoading] = useState(false)

    const   login = async(email:string, password:string) => {
        setLoading(true)
        setTimeout(()=> {
                    setLoading(false)
                    setAuthenticated(true)
                },1000)
               
    }

    return {
        isAuthenticated,isLoading, login
    }
}

export default useLogin