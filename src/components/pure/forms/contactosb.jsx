import React,{useState} from 'react'

function Contactosb({conectado}) {
const [state, setstate] = useState(conectado);
const cambiar=()=>{
    setstate(!state);
}
  return (
    <div>
        <h3>El estado es:{state?'Contacto en linea':'Contacto no disponible'}</h3>
    <button onClick={cambiar}>Cambiar estado</button>
    </div>
  )
};
export default Contactosb;





