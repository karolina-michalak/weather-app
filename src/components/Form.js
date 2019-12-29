import React from 'react';
import styles from '../modules/Form.module.css';


const Form = props => {
    return (
        <form onSubmit={props.submit}>
            <input type="text" placeholder="type city here" value={props.value} onChange={props.change}/>
            <button>search</button>
        </form>
    )
}
export default Form;
