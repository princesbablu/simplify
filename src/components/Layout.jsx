import React from 'react'

const Layout = ({ className, children, ...props }) => {
    return (
        <div className={`relative z-10 pb-24 w-full min-h-screen max-w-[428px] min-w-[320px] mx-auto bg-[#141517] text-white${className ? " " + className : ''}`}>{children}</div>
    )
}

export default Layout;