import clases from './About.module.css'
import Nohe from '../../img/Nohe.jfif'

export default function About(props){
    return(
        <div>
            <div className={clases.container}>
                <h1 className={clases.h1}>Sobre esta página</h1>
                <p><span className={clases.more}> Henry Weather App</span> es una app de clima que consume información de la api externa Open Weather Map, permitiéndote acceder a datos climáticos de ciudades y países alrededor del mundo. Para agregar una localidad accede a la pantalla "Home", en cada tarjeta puedes ver más detalles cliqueando en el botón destinado para ello.</p>
                <p>App hecha a base de React.js y estilos con CSS Modules por: <span className={clases.more}>Nohelia</span></p>
                <img className={clases.img} src={Nohe} alt="Perfil" />
            </div>
        </div>
        
    )
}