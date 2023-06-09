import React, { Component } from "react";
import { nanoid } from 'nanoid';
import Section from "./Section/Section";
import Title from "./ContactTitle/ContactTitle";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsFilter from "./ContactsList/Filter";
import ContactsList from "./ContactsList/ContactsList";


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }


  createContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number
    }
    
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }))
  }


  removeContact = (id) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    })
  }

  handelChangeFilter = ({ target: { value } }) => {
    this.setState({
      filter: value
    })
  }


  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    )


    return (
      <Section>
        
        <ContactsForm onSubmit={this.createContact} contacts={this.state.contacts} />

        <Title text="Contacts" />
        <ContactsFilter filter={this.state.filter} onChangeFilter={this.handelChangeFilter} />
        <ContactsList contacts={visibleContacts} onRemoveClick={this.removeContact} />
      </Section>
    );
  }
};
