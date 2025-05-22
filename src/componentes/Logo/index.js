import logo from '../../img/logo.svg'
import './estilo.css'

function Logo() {
    return (
        <div className="App-logo">
            <img src={logo} className="logo-img" alt="logo" />
            <p className="logo-texto">
                <strong>Alura</strong>Books
            </p>
        </div>
    )
}

export default Logo