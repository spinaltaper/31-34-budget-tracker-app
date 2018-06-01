import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils';

const defaultState = {
  title: '',
};

class SectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.section || defaultState;
    autoBind.call(this, SectionForm);
  }
  handleChange(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(defaultState);
  }
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.section) {
      return nextProps.section;
    }
    return defaultState;
  }
  render() {
    const buttonText = this.props.section ? 'Update' : 'Create';
    return (
      <form
        onSubmit={this.handleSubmit}
        className='section-form'>

        <input
          type='text'
          name='title'
          placeholder='Title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button type='submit'>{buttonText} Section</button>

      </form>
    );
  }
}

SectionForm.PropTypes = {
  onComplete: PropTypes.func,
  section: PropTypes.object,
};

export default SectionForm;
