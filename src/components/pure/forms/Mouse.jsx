import React ,{useState} from 'react';
import '../../../styles/contacto.css' ;

const Mouse = () => {
   const [red, setred] = useState(0);
   const[green,setgreen]=useState(0);
   const [blue, setblue] = useState(0);
   const cambiar=()=>{
    const valor=setred(Math.floor(Math.random() * 256));
    setred(red);
}

  
    const color3={
        
        backgroundColor:`rgb(${cambiar},${green},${blue})`,
       
    };
    
    const [color2, setcolor2] = useState(color3);
    setcolor2()
    
    
    return (
        <div  className='color' style={color2 }>

        </div>
    );
}

export default Mouse;
