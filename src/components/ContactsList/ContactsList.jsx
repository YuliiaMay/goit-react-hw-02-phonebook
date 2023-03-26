import React from "react";

const ContactsList = ({ contacts, onRemoveClick }) => (
    <ul>
        {
            contacts.map(({ id, name, number }) => {
                return (
                    <li key={id}>
                        <span>{name}</span>
                        <span>{number}</span>
                        <button
                            type="button"
                            onClick={() => {
                                onRemoveClick(id);
                            }}
                        >Delete</button>
                    </li>
                )
            })
        }
    </ul>
) 

export default ContactsList;