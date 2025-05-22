import './estilo.css'
import Perfil from '../../img/perfil.svg'
import Sacola from '../../img/sacola.svg'

const icones = [Perfil, Sacola]

function IconesHeader(){
    return(
        <div className="icones">
            {icones.map((icone) => {
                return <img src={icone} alt="icone" className='icone'/>
            })}
        </div>
    )
}

export default IconesHeader