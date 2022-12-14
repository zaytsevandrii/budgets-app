import { useState } from "react"
import { Button, Container, Stack } from "react-bootstrap"
import AddBudgetModal from "./Components/AddBudgetModal"
import BudgetCard from "./Components/BudgetCard"
import { useBudgets } from "./context/BudgetContext"

function App() {
    const [showAddBudgetModal, setShowAddBudgetModal] = useState()
    const {budgets,getBudgetExpenses}= useBudgets()
    return (
        <>
            <Container className="my-4">
                <Stack direction="horizontal" gap="2" className="mb-4">
                    <h1 className="me-auto">Budgets</h1>
                    <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>
                        Add Budget
                    </Button>
                    <Button variant="outline-primary">Add Expense</Button>
                </Stack>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))",
                        gap: "1rem",
                        alignItems: "Flex",
                    }}
                >
                    {budgets.map((budget) =>{
                      const amount=getBudgetExpenses(budget.id)
                      return(
                        <BudgetCard name={budget.name} key={budget.id} gray amount={0} max={budget.max} />
                      )
                    })}
                </div>
            </Container>
            <AddBudgetModal show={showAddBudgetModal} handleClose={() => setShowAddBudgetModal(false)} />
        </>
    )
}

export default App
