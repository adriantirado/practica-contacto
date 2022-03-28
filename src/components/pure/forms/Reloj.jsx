import React, { useState,useEffect } from 'react'
const Reloj=()=>{
    const [fecha, setfecha] = useState(new Date());
    const [age, setage] = useState(0);
    const [name, setname] = useState('Martin');
    const [apellidos, setapellidos] = useState('San Jose');
    const tick = () => {
            setfecha(new Date());
            setname(name);
            setapellidos(apellidos);
            setage(age+1);
    }
    useEffect(()=>{
        const intervalID=setInterval(()=>{
          tick();
        },1000);
        return()=>{
            clearInterval(intervalID);
        };
    });
    
    return (
        <div>
        <h2>
         Hora Actual:{fecha.toLocaleTimeString()}
         </h2>
         <h3>{name} {apellidos}</h3>
         <h1>Edad: {age}</h1>
        </div>
    )
    
      
};
export default Reloj;








  

