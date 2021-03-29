import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
    const balance=useSelector((state)=>state.banking.balance)
    const store=useSelector(state=>state)
    console.log('Store', store);
    return (
        <div>
            <h2>${balance}</h2>
        </div>
    )
}

export default Balance
