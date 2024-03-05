import React,{useId} from 'react'

// function Input({
//     label,
//     type = 'text',
//     className = '',
//     ...props
// }) {
//     const id = useId()
//   return (
//     <div>Input</div>
//   )
// }

//Forward Ref is used to pass the ref to the child component from the parent component
// forwardref matlab eg. login page pe username and password input field hote hain,
// toh usme ref pass karna hota hai, toh uske liye forwardref use hota hai

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
},ref){

    const id = useId()             //useId is used to generate the unique id for the input field

    return (
        <div className='w-full'>
            {label && <label 
                htmlFor={id} 
                className='inline-block mb-1 pl-1'>
                {label}
            </label>}
                <input type={type}
                    className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
                    ref={ref}            //ref is used to pass the ref to the input field
                    {...props}
                    id={id}
                />
        </div>
    )
})

export default Input