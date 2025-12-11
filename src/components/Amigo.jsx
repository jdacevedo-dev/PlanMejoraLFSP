function Amigo({nombre, edad, ciudad, imagen}) {
    return (
        <div className="card">
            <img src={imagen} alt={nombre} />
            <h3>{nombre}</h3>
            <p>Edad: {edad}</p>
            <p>Ciudad: {ciudad}</p>
        </div>
    );
}

export default Amigo;