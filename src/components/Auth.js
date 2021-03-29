import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleAuth } from '../actions/bankingActions'

const Auth = () => {
    const dispatch=useDispatch()
    const auth=useSelector((state)=>state.auth)
    const handleAuth=()=>{
        dispatch(toggleAuth())
    }
    return (
        <div>
            <button onClick={handleAuth} className="btn btn-info">{auth.isLoggedIn ? 'LogOut' : 'LogIn'}</button>
        </div>
    )
}

export default Auth
