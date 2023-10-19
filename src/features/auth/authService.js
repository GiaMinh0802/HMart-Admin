import axios from 'axios'
import { base_url } from '../../utils/base_url'

const login = async (userData) => {
    const response = await axios.post(`${base_url}auth/login`, userData)
    if (response.data && response.data.role === "admin") {
        localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
}

const authService = {
    login,
}

export default authService