import React from 'react'
import styles from "./Form.module.css"
import { useNavigate } from "react-router-dom";


function FormField({ name, type, placeholder, value, onChange }) {
    return (
        <input value={value} onChange={onChange} name={name} type={type} placeholder={placeholder} />
    )
}

export default function Form({ formFields, onSubmit, error, errorMessages,buttonLabel }) {
    return (
        <form onSubmit={onSubmit}>
    {formFields.map((field, index) => (
        <React.Fragment key={index}>
            <FormField 
                value={field.value} 
                onChange={field.onChange} 
                name={field.name} 
                type={field.type} 
                placeholder={field.placeholder} 
            />
            {error[field.name] ? <p>{errorMessages[field.name].message}</p> : null}
        </React.Fragment>
    ))}
    <button type="submit" className={styles.buttons}>{buttonLabel}</button>
  
</form>

    )
}
