import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils';

const emptyState = {
    title: '',
    price: 0,
};

export default class ExpenseForm extends React.component{
    constructor(props) {
        super(props);
        this.state = this;props.expense ? this.props.expense : emptyState;

        autoBind.call(this, ExpenseForm);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleComplete(this.state);
        this.setState({
            [name]: value,
        });
    }

    render () {
        const buttonText = this.props.expense ? 'Update' : 'Create';
        return (
            <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="title"
                value={this.state.title}
                onChange={this.handleChange}
            />
            <input
                type="number"
                name="price"
                placeholder="price"
                value={this.state.price}
                onChange={this.handleChange}
            />
            <button type="submit">{buttonText} Expense</button>
            </form>
        );
    }
}

ExpenseForm.propTypes = {
    expense: PropTypes.object,
    handleComplete: PropTypes.func,
};