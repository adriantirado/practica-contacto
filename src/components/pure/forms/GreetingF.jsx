import React ,{useState} from 'react';
import PropTypes from 'prop-types';



const Greetingf = (props) => {
    const [age,setage] = useState(22);
    const birthday=() =>{
        setage(age+1)
    }
    return (
        <div>
            <h1>Hola: {props.name}</h1>
            <h2>Mi edad es: {age}</h2>
            <div>
                <button onClick={birthday}>Cumplir años</button>
            </div>
        </div>
    );
};


Greetingf.propTypes = {

};


export default Greetingf;
