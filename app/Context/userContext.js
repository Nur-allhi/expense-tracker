import React, { createContext, useState } from "react";


export const UserContext = createContext();




export default function userContext({ children }) {

    const [totalbalance, setTotalBalance] = useState('')
    const [totalExpense, setTotalExpense] = useState('')
    const [balanceData, setBalanceData] = useState([])
    const [expenseData, setExpenseData] = useState([])

    return (
        <>
            <UserContext.Provider value={{
                totalbalance,
                setTotalBalance,
                totalExpense,
                setTotalExpense,
                balanceData,
                setBalanceData,
                expenseData,
                setExpenseData,

            }}>
                {children}
            </UserContext.Provider>
        </>
    )
}

