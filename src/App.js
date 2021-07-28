import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

import Filter from 'components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
import Title from './components/Title/Title';
import ContactList from 'components/ContactList/ContactList';

export function App () {
  const [contacts,setContacts] = useState(()=>{
    return JSON.parse(window.localStorage.getItem('contacts')) ?? ''
  })

  const [filter,setFilter]= useState('')

  useEffect(()=>{
    window.localStorage.setItem('contacts',JSON.stringify(contacts))
  },[contacts])


  const addContact = (name, number) => {
    const contact = { id: nanoid(), name, number };

    setContacts(prev=>{
      return [contact, ...prev]
    })
  };

  const deleteContact = e => {
    const id = e.currentTarget.id;
    setContacts(contacts.filter(n => n.id !== id))
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value)
  };

  const getVisibleContacts = () => {
    if (!contacts) return

    const normalizedFilter = filter.toLowerCase();
   return  contacts.filter(({name})=> name.toLowerCase().includes(normalizedFilter))
  };


  const  handleCoincidence = currentName => {
    if (!contacts) return

    if (contacts.find(({ name }) => name.toLowerCase() === currentName)) {
      alert(`${currentName} is already in contacts`);
      return true;
    }
  };
  return (
      <>
        <Title>Phonebook</Title>
        <ContactForm
          onSubmit={addContact}
          coincidence={handleCoincidence}
        />
        <Title>Contacts</Title>
        {contacts.length !== 0 && <Filter value={filter} onChange={changeFilter} />}
        <ContactList
          contacts={getVisibleContacts()}
          deleteContact={deleteContact}
        />
      </>
    );
}

