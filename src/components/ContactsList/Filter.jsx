import React from "react";
import { FilterBlock } from "./Filter.styled";

const ContactsFilter = ({filter, onChangeFilter}) => (
    <FilterBlock>
        <label htmlFor="contacts-filter">Find contacts by name</label>
        <input 
            id='contacts-filter'
            type="text"
            value={filter}
            onChange={onChangeFilter}
        />
    </FilterBlock>
)

export default ContactsFilter;