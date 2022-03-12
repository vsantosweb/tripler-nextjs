import { NextPage } from 'next'
import React from 'react'
import useAuth from '../../providers/auth/useAuth'

export const Panel: NextPage = () => {
    return (
        <div>
            customer panel
        </div>
    )
}

export default useAuth(Panel);