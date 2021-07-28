import { nanoid } from 'nanoid';

import Filter from 'components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
import Title from './components/Title/Title';
import ContactList from 'components/ContactList/ContactList';
import { useEffect, useState } from 'react';

export function App () {
  const [contacts,setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ])

  const [filter,setFilter]= useState('')

  // useEffect(()=>{
  //    JSON.parse(window.localStorage.setItem('contacts',JSON.stringify(contacts)))
  // },[contacts])


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
    // if (!contacts) {
    //   return [
    //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    //   ]
    // }
    const normalizedFilter = filter.toLowerCase();
   return  contacts.filter(({name})=> name.toLowerCase().includes(normalizedFilter))
  };


  const  handleCoincidence = currentName => {
    if (contacts.find(({ name }) => name.toLowerCase() === currentName)) {
      alert(`${currentName} is alredy in contacts`);
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
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getVisibleContacts()}
          deleteContact={deleteContact}
        />
      </>
    );
}

