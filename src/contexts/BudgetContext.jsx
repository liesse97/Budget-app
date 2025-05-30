import React, {useContext , useState} from 'react'
//function to call to create a new unique ID
import {v4 as uuidV4 } from 'uuid'

export const BudgetContext = React.createContext()

export const useBudgets = () => {
return useContext (BudgetContext)
}


/*
Budget look
{
id:
name:
max:
}

Expense
{
id:
budhetId:
amount:
description:
}
*/


export const BudgetsProvider = ({children}) => {
//Store information whhen tex reading the page and come back
const [budgets,setBudgets] = useState([])
const [expenses,setExpenses] = useState([])

function getBudgetExpense(budgetId){
    return expenses.filter (expense => expense.budgetId === budgetId)
}

function addExpense({description,amount,budgetId}){
setExpenses(prevBudgets => {
    return [...prevBudgets,{ id: uuidV4(),description,amount,budgetId}]
})
}

function addBudget({names,max}){
    setBudgets(prevBudgets => {
        if (prevBudgets.find(budget => budget.names === names)){
            return prevBudgets
        }
        //Keeping the prevbudgets and then adding new id,names and max value we pass into this function
        return [...prevBudgets,{ id: uuidV4(),names,max}]
    })

}

function deleteBudget({id}){
    //TODO: Deal with uncategorized expense
    setBudgets(prevBudgets => {
    return prevBudgets.filter (budget => budget.id !== id)
    })
}

function deleteExpense({id}){
    setExpenses(prevExpenses => {
    return prevExpenses.filter (expense => expense.id !== id)
    })
}





return (
<BudgetContext.Provider value={{
    budgets,
    expenses,
    getBudgetExpense,
    addExpense,
    addBudget,
    deleteBudget,
    deleteExpense
}}>
    {children}
</BudgetContext.Provider>
)
}









