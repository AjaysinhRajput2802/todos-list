import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "fixed",
        width: "100%",
        bottom: "0vh",
    };
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">Copyright &copy; MyTodosList.com</p>
        </footer>
    )
}
