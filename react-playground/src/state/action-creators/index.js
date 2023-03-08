//Creating Action creators

export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "DEPOSIT",
            payload: amount
        });
    }
}

export const withdrawyMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "WITHDRAW",
            payload: amount
        });
    }
}