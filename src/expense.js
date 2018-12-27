import React from 'react';

////////// Expense Api App //////////

//http://localhost:8080/api/v1/expenses - all expenses
//http://localhost:8080/api/v1/expenses/{id} - specific expense

class ExpenseApp extends React.Component {
    render() {
        return (
            <form class="form-inline" onSubmit={this.handleSubmit}>
                <input
                    id="expenseInput"
                    class="form-control"
                    type="text"
                    placeholder="Expense ID"
                />
                <button id="expenseSubmit" class="btn btn-info submit-button" type="submit">Search</button>
            </form>
        );
    }
}

export default ExpenseApp;