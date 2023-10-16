import { Component } from 'react';
import css from './ContactForm.module.css'

class ContactForm extends Component {
  state = {
    name: '',
    phone: '',
  }

  inputHandler = e => {
    const {name, value} = e.currentTarget
    this.setState({
      [name]: value,
    })
  };

  reset = () => {
    this.setState({name: '', phone: '',})
  }

  submitContact = e => {
    e.preventDefault()

    this.props.onSubmit(this.state)
    this.reset()
  }

  

  render() {
    return (
      <form className={css.form} onSubmit={this.submitContact}>
        <label className={css.label}>
          Name
          <input
          className={css.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputHandler}
            required
          />
        </label>
        <label className={css.label}>
        Number
          <input
          className={css.input}
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={this.inputHandler}
            required
          />
          
        </label>
        <button className={css.btn} type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
