import { text } from 'express'
import React from 'react'

function Button({
    children,                   
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',             //className is used to pass the custom classes to the button
    ...props                   //props is used to pass the rest of the props to the button
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button