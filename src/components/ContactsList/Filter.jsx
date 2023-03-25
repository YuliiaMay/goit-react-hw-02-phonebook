import React from "react";

const ContactsFilter = ({filter, onChangeFilter}) => (
    <div>
        <label htmlFor="contacts-filter">Find contacts by name</label>
        <input 
            id='contacts-filter'
            type="text"
            value={filter}
            onChange={onChangeFilter}
        />
    </div>
)

export default ContactsFilter;