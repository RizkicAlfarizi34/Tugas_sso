import axios from "axios"

const BACKEND_DOMAIN = "http://localhost:8000"

const LOGIN_URL = `${BACKEND_DOMAIN}/api/token/`

// Login user

const login = async (userData) => {
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    const response = await axios.post(LOGIN_URL, userData, config)
    // console.log(response)
    if (response.data) {
        localStorage.setItem("access", response.data.access)
        localStorage.setItem("refresh", response.data.refresh)
    }

    return response.data
}

// Logout 

const logout = () => {
    localStorage.removeItem("refresh")
    localStorage.removeItem("access")
}

const authService = { login, logout }

export default authService