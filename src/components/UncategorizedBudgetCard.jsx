import { useBudgets,UNCATEGORIZED_BUDGET_ID } from '../contexts/BudgetContext'
import BudgetCard from './BudgetCard'

const UncategorizedBudgetCard = (props) => {
const {getBudgetExpense} = useBudgets()
const amount = getBudgetExpense(UNCATEGORIZED_BUDGET_ID).reduce((total,expense)=> total+expense.amount,0)

//If amount is null then don't show
if(amount === 0) null
return (
< BudgetCard amount ={amount} names="Uncategorized" gray {...props}/>
)
}

export default UncategorizedBudgetCard
