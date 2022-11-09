import '../styles/globals.css';
import Header from "../components/Header";

interface Props {
    children: JSX.Element[] | JSX.Element
}

const Layout = (props: Props) => {
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