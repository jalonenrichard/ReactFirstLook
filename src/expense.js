import React from 'react';

////////// Expense Api App //////////

//http://localhost:8080/api/v1/expenses - all expenses
//http://localhost:8080/api/v1/expenses/{id} - specific expense

class ExpenseApp extends React.Component {
    render() {
        return (
            <div class="row">
                <div class="col-sm-12">
                    <div class="card mb-12 box-shadow">
                        <h5 class="card-header">Expenses Api Presentation</h5>
                        <div id="expenses" class="card-body">
                            <form class="form-inline" onSubmit={this.handleSubmit}>
                                <input
                                    id="expenseInput"
                                    class="form-control"
                                    type="text"
                                    placeholder="Expense ID"
                                />
                                <button id="expenseSubmit" class="btn btn-info submit-button" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ExpenseApp;