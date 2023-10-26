import { useState, useEffect } from 'react';

import { Container, MainTitle, SubTitle } from './App.styled';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContqctList/ContactList';

const contactList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? contactList;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHendel = data => {
    const contactNames = contacts.map(contact => contact.name);

    if (contactNames.includes(data.name)) {
      alert(`${data.name} is already in contacts.`);
    } else {
      setContacts([data, ...contacts]);
    }
  };

  const deleteContacts = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const filterContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filterdContact = filterContact();
  
  return (
    <>
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={formSubmitHendel} />
        <SubTitle>Contacts</SubTitle>
        <Filter
          onFilterHandler={changeFilter}
        />
        <ContactList
          contacts={filterdContact}
          onDelete={deleteContacts}
        />
      </Container>
    </>
  );
};

export default App;
   
  


