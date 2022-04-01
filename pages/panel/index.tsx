import { NextPage } from 'next'
import React from 'react'
import useAuth from '../../providers/auth/useAuth'
import DefaultLayout from '../../resources/layouts/DefaultLayout'

export const Panel: NextPage = ({ layout }:any) => {

    return (
        <DefaultLayout>
             customer panel
        </DefaultLayout>
    )
}

export default useAuth(Panel);