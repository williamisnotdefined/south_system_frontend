import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import * as Auth from '@helpers/auth'

export default function useAuthenticated() {
    const [isAuthenticated, setIsAuthenticated] = useState(Auth.isAuthenticated())
    const location = useLocation()

    useEffect(() => {
        setIsAuthenticated(Auth.isAuthenticated())
    }, [location])

    return isAuthenticated
}
