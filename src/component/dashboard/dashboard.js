import React from 'react';
import uuid from 'uuid/v4';
import ExpenseForm from '../expense-form/expense-form';
import ExpenseItem from '../expense-item/expense-item';
import autoBind from '../../utils';

export default class Dashboard extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            expense: [],
            error: null,
        };

        autoBind.call(this, Dashboard);
    }

handleAddExpense(expense) {
    if(expense.title === ''){
        return this.setState({ error: true });
    }
    expense.createdOn = new Date();

    return this.setState((previousState) => {
        return {
            expenses: [...previousState.expenses, { ...expense, id: uuid() }],
            error: null,
        };
    });
}

handleRemoveExpense(expenseToRemove){
    this.setState((previousState) => {
        return {
            expenses: previousState.expenses.filter(expense => 
                (expense.id === expenseToUpdate.id ? expenseToUpdate : expense)),
        };
    });
}

handleTotalPrice() {
    return this.state.expenses.reduce((sum, expense) => {
        return sum + Number(expense.price);
    }), 0;
}

handExpensesList(){
    return(
        <ul>
            {
                this.state.expenses.map((expense) => {
                    return (
                        <li key={expense.id}>
                            <ExpenseItem
                                expense={expense}
                                handleRemoveExpense={this.handleRemoveExpense}
                                handleUpdateExpense={this.handleUpdateExpense}
                            />
                        </li>
                    );
                })
            }
        </ul>
    );
}

render() {
    return (
        <section className="dashboard">
        <h1>Budget Tracker Dashboard</h1>
        <ExpenseForm
            handleComplete={this.handleAddExpense}
        />
        { this.state.error && <h2 className="error">You must enter a title. </h2> }
        { this.handleExpensesList() }
        <p> Your total costs are ${this.handleTotalPrice() } </p>
        </section>
    );
}
}