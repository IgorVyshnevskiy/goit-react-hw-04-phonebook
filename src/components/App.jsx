import { Component } from 'react';
import ContactList from './ContqctList/ContactList';
import ContactForm from 'components/ContactForm';
import shortid from 'shortid';
import Filter from './Filter';

import { Container, SubTitle, MainTitle } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    
    if(parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }
  
  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
    
  }

  formSubmitHandler = data => {
    const contactNames = this.state.contacts.map(contact => contact.name);

    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.phone,
    };
    if (contactNames.includes(data.name)) {
      alert(`${data.name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  filterContactsHandler = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  renderContactsFilter = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = numberId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(number => number.id !== numberId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.renderContactsFilter();

    return (
      <>
        <Container>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm onSubmit={this.formSubmitHandler} />
          <SubTitle>Contacts</SubTitle>
          <Filter
            filter={filter}
            onFilterHandler={this.filterContactsHandler}
          />
          <ContactList
            contacts={visibleContacts}
            onDelete={this.deleteContact}
          />
        </Container>
      </>
    );
  }
}

export default App;
