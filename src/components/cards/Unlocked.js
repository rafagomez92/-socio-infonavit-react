function Locked(props) {
    const { image, primary_color, wallet, description, location, expiration } = props;     
    
    const [{ name }] = location;    
    
    let expirationDay = expiration.split('-').join(',');
        
    let dayEnd = new Date(expirationDay);
    let dayStart = new Date();
        
    let days = Math.round((dayEnd - dayStart)/(60 * 60 * 24 * 1000)) + 1; 
        
    return (
    <div className="m-3 col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card" style={{width: "18rem"}}> 
            <div className="card-header">
                <img loading="lazy" src={image} className="img-fluid" alt="imagen_tarjeta" />
            </div>
            <div className="card-body p-3 ">
                <p>{description}</p>
                <p className="font-weight-bold">{name}</p>
                <p>{`Vence en: ${days} días`}</p>            
            </div>
            <div className="card-footer">
                <h5 style={{color: primary_color}}> {wallet} </h5>
            </div>
        </div>
    </div>
    )
}

export default Locked;