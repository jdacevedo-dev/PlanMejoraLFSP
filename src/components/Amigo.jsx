import { useState } from "react";

/**
 * Componente Amigo
 * Ahora incluye estado para cambiar contenido al hacer clic.
 */

function Amigo({ nombre, edad, ciudad, imagen }) {
    // Estado para mostrar información adicional al hacer clic
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    const manejarClick = () => {
        setMostrarMensaje(!mostrarMensaje);
    };

    return (
        <div className="card" onClick={manejarClick} style={{ cursor: "pointer" }}>
            <img src={imagen} alt={nombre} />
            <h3>{nombre}</h3>

            {mostrarMensaje ? (
                <p><strong>¡Soy tu amigo!</strong></p>
            ) : (
                <>
                    <p>Edad: {edad}</p>
                    <p>Ciudad: {ciudad}</p>
                </>
            )}
        </div>
    );
}

export default Amigo;
