import React from 'react';
import './errorMessage.css'
import img from './error.jpg'

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'/>
            <span>Somethink goes wrong!</span>
        </>
    )
}

export default ErrorMessage;