import { Link } from 'react-router-dom'
import logo from '../../img/logo.svg'
import './estilo.css'

function Logo() {
    return (
        <Link to="/">
            <div className="App-logo">
                <img src={logo} className="logo-img" alt="logo" />
                <p className="logo-texto">
                    <strong>Alura</strong>Books
                </p>
            </div>
        </Link>
    )
}

export default Logo