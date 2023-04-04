import React from 'react'

const Button = ({ type, children, ...props }) => {
    return (
        <>
            {
                type === "primary" ?
                    <button type="button" className="text-[#D8DBD5] bg-primary focus:outline-none hover:bg-[#6d23d6] font-medium rounded-md px-8 py-3.5 w-full text-sm" {...props}>{children}</button> :
                    <button type="button" className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-lg px-8 py-3.5 w-full" {...props}>{children}</button>
            }
        </>
    )
}

export default Button