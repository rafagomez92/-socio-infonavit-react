import logo from '../../assets/logo.png';
import familia from '../../assets/vector_familia.png';
import Formulario from './Formulario';
const Login = () => {
    return(                    
        <>
            <div className="container-fluid bg-danger">
                <div className="row justify-content-center">
                    <img className="w-25 mt-5 img-fluid" src={familia} alt="familia" />
                </div>
                <div className="row justify-content-center">
                    <img className="mb-5 img-fluid" src={logo} alt="logo"/>
                </div>
            </div>        
            <div className="container-fluid text-center">
                <Formulario />
            </div>        
        </>
    );
}



 
export default Login;