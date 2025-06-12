import Container from 'react-bootstrap/Container'
import { Button,Stack } from 'react-bootstrap'
import BudgetCard from './components/BudgetCard'
import AddBudgetModal from './components/AddBudgetModal'
import { useState } from 'react'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './contexts/BudgetContext'
import AddExpenseModal from './components/AddExpenseModal'
import UncategorizedBudgetCard from './components/UncategorizedBudgetCard'
import TotalBudgetCard from './components/TotalBudgetCard'
import ViewExpenseModal from './components/ViewExpenseModal'

function App() {
const[showAddBudgetModal,setShowAddBudgetModal] = useState(false)
const[showAddExpenseModal,setShowAddExpenseModal] = useState(false)
const[ViewExpensesModalId,setViewExpensesModalId] = useState()
const[addExpenseModalId,setaddExpenseModalId] = useState()
const {budgets,getBudgetExpense} = useBudgets ()

function openAddExpenseModal (budgetId){
setShowAddExpenseModal(true)
setaddExpenseModalId(budgetId)
}

return (
<>
<Container className='my-4'>
<Stack direction ="horizontal"  gap ="2" className ="mb-4">
<h1 className="me-auto">Budgets</h1>

<Button 
variant ="primary"
onClick={() => setShowAddBudgetModal(true)}
> 
Add Budget
</Button>

<Button 
variant ="outline-primary" 
onClick={openAddExpenseModal}
> 
Add Expense
</Button
>
</Stack>
<div style={{ 
display:"grid", 
gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",
gap:"1rem",
alignItems:"flex-start"
}}>

{budgets.map(budget=>{
const amount = getBudgetExpense(budget.id).reduce((total,
expense)=> total+expense.amount,0)
return(
<BudgetCard 
key= {budget.id}
names={budget.names}
amount={amount}
max={budget.max}
//Open that particular carf
onAddExpenseClick ={()=>openAddExpenseModal(budget.id)}
onViewExpensesClick={() =>setViewExpensesModalId(budget.id)}

/>
)
})}

<UncategorizedBudgetCard 
onAddExpenseClick={openAddExpenseModal} 
onViewExpensesClick={() =>setViewExpensesModalId(UNCATEGORIZED_BUDGET_ID)}
/>
<TotalBudgetCard />

</div>
</Container>

<AddBudgetModal
show={showAddBudgetModal} 
handleClose={()=>setShowAddBudgetModal(false)}
/>

<AddExpenseModal
show={showAddExpenseModal} 
defaultBudgetId={addExpenseModalId}
handleClose={()=>setShowAddExpenseModal(false)}
/>

<ViewExpenseModal
    budgetId={ViewExpensesModalId}
    handleClose={() => setViewExpensesModalId(null)}
/>


</>

)
}

export default App
