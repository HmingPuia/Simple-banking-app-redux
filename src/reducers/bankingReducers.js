const initialState={
    balance:0,
    isSavingAccount:false
}
export const bankingReducers=(state=initialState, action)=>{
    switch(action.type){
        case "DEPOSIT":
            return {...state,balance: state.balance + action.amount}
        case 'WITHDRAW':
            return {...state,balance: state.balance - action.amount}
        case 'COLLECT_INTEREST':
            return {...state,balance: state.balance * 1.03}
        case 'DELETE_ACCOUNT':
            return {...state,balance:0}
        case "TOGGLE_ACCOUNT":
            return {...state,isSavingAccount: !state.isSavingAccount}
        default:
            return state;
        
    }

 
}


