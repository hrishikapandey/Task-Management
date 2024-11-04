import React from 'react'

function FormField({ name, type, placeholder, value, onChange }) {
    return (
        <input value={value} onChange={onChange} name={name} type={type} placeholder={placeholder} />
    )
}

export default function Form({ formFields, onSubmit, error, errorMessages }) {
    return (
        <form onSubmit={onSubmit}>
            {formFields.map((field, index) => (
                <React.Fragment key={index}> {/* Move key to the fragment */}
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
            <button type="submit">Register</button>
            <p>Have an account ?</p>
            <button>Log in</button>
        </form>
    )
}
