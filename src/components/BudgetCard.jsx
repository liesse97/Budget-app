import { Button, Card, ProgressBar, Stack } from "react-bootstrap"
import {currencyFormatter} from '../utils'

const BudgetCard = ({names,amount,max,gray,hideButtons,onAddExpenseClick,onViewExpensesClick}) => {

    const backgroundClass =[]
    if (amount > max){
        backgroundClass.push("bg-danger","bg-opacity-10")
    } else if (gray){
        backgroundClass.push('bg-light')
    }
return (
<Card className= {backgroundClass}>
<Card.Body>
<Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
<div className="me-2">{names}</div>   
<div className="d-flex align-items-baseline">
    {currencyFormatter.format(amount)}
    {max && (
        <span className="text-muted fs-6 ms-1">/{currencyFormatter.format(max)}
        </span>
    )}
    </div>   
</Card.Title>
 {max &&(
    <ProgressBar 
className="rounded-pill" 
variant ={getProgressBarVariant (amount,max)}
min ={0}
max={max}
now = {amount}
/>
 )}
{!hideButtons && (
    <Stack direction="horizontal" gap ="2" className="mt-4">
    <Button variant="outline-primary" className="ms-auto" onClick={onAddExpenseClick}>Add Expense</Button>
    <Button variant="outline-secondary" onClick={onViewExpensesClick} >View Expense</Button>
</Stack>
)}
</Card.Body>
</Card>

)}

export default BudgetCard


function getProgressBarVariant (amount,max){
    const ratio = amount /max;
    if (ratio < .5) return 'primary'
    if (ratio < .75) return 'warning'
    return 'danger'

}

