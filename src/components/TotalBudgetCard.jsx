import { useBudgets,UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetContext'
import BudgetCard from './BudgetCard'

const TotalBudgetCard = () => {
const {expenses, budgets} = useBudgets()
const amount = expenses.reduce((total,expense)=> total+expense.amount,0)
const max = budgets.reduce((total,budget)=> total+budget.max,0)
//If amount is null then don't show
if(amount === 0) null
return (
< BudgetCard amount ={amount} names="Total" gray max={max} hideButtons/>
)
}

export default TotalBudgetCard
