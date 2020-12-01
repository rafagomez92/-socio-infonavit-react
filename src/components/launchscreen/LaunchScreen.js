import FadeIn from './FadeIn';
import './launch.css';

const LauncScreen = () => {
    
    return (
        <section>                    
            <div className="contenedor launch">
                    <div className="d-flex justify-content-center">
                        <div className="spin spinner-border text-light text-center" role="status">
                        <span className="sr-only bg-dark">Loading...</span>
                    </div>
                </div>
                <FadeIn />                    
            </div>
            
        </section>
    );
}

 export default LauncScreen;
