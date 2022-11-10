import React from 'react';
import '../styles/globals.css';
import Header from "../components/Header";

interface Props {
    children?: React.ReactNode
}

const Layout :React.FC<Props>= (props: Props) => {
    return (
        <html lang="en">
        <body>
        <Header/>
        {props.children}
        </body>
        </html>
    )
}
export default Layout;