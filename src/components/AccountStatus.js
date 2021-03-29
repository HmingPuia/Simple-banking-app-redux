import React from 'react'
import { useSelector } from 'react-redux'

const AccountStatus = () => {
    const isSavingAccount=useSelector((state)=>state.banking.isSavingAccount)
    return (
        <div>
            <h2>{isSavingAccount ? "Saving accounts":"Checking Account"}</h2>
        </div>
    )
}

export default AccountStatus
