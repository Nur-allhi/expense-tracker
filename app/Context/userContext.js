import React, { createContext, useState } from "react";


export const UserContext = createContext();




export default function UserProvider({ children }) {

    const [totalbalance, setTotalBalance] = useState('')
    const [balanceData, setBalanceData] = useState([])
    const [totalExpense, setTotalExpense] = useState('')
    const [expenseData, setExpenseData] = useState([])


    

    
    // const getDataFromTheDevice = async () => {
    //     try {
    //         const balanceData = await AsyncStorage.getItem("BalanceData");
    //         if (balanceData != null) {
    //             setBalanceData(JSON.parse(balanceData))
    //             console.log("Successfully got the data")

    //         }
    //     } catch (error) {
    //         console.log("GetItem =", error)
    //     }
    // }

    

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

