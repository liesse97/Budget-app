import {useRef} from 'react'
import { Modal,Form,Button } from 'react-bootstrap'
import { useBudgets } from '../contexts/BudgetContext'

const AddBudgetModal = ({show,handleClose}) => {

const nameRef = useRef ()
const maxRef = useRef ()
//Context
const {addBudget} = useBudgets ()


function handleSubmit(e){
// Prevent default form submission behavior
    e.preventDefault ()
// Call addBudget function with an object containing:
// - names: value from the name input field
// - max: parsed float value from the max input field
    addBudget(
    {
    names: nameRef.current.value,
    max: parseFloat(maxRef.current.value)
    })
// Close the modal
    handleClose()
}

return (
//Controlled by show prop (determines visibility)
//onHide triggers handleClose when trying to close
//Submits trigger handleSubmit
//Uses React refs (nameRef and maxRef) to access input values
//Includes basic form validation

<Modal show={show} onHide={handleClose}>
<Form onSubmit ={handleSubmit}>
    <Modal.Header closeButton>
        <Modal.Title>New Budget</Modal.Title>
    </Modal.Header>

<Modal.Body>
    <Form.Group className="mb-3" controlId='name' >
        <Form.Label>Name</Form.Label>
        <Form.Control ref={nameRef} type='text' required/>
    </Form.Group>

        <Form.Group className="mb-3" controlId='max' >
        <Form.Label>Maximum Spending</Form.Label>
        <Form.Control ref={maxRef} type='number' required min={0} step={0.01}/>
    </Form.Group>

    <div className="d-flex justify-content-end">
        <Button variant ="primary" type= "submit">Add</Button>
    </div>

</Modal.Body>
</Form>

</Modal>
)
}

export default AddBudgetModal
