import React from 'react'

const Button = ({title, type, onEventCall}) => {
    return (
        <>
          <button className='btn btn-dark' onClick={onEventCall} type={type}>{title}</button>  
        </>
    )
}

export default Button
