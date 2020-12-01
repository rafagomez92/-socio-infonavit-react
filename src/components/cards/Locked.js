function Locked(props) {
    const { image, wallet, primary_color } = props;        
    return (
    <div className="m-3 col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card" style={{width: "18rem"}}> 
            <div className="card-header">
                <h5 style={{color: primary_color}}> {wallet} </h5>
            </div>
            <div className="card-body p-3 text-center">
                <img loading="lazy" src={image} className="img-fluid" alt="imagen_tarjeta" />
                <button className="btn btn-danger btn-lg">Lo quiero</button>
            </div>
        </div>
    </div>
    )
}

export default Locked;