import React from 'react';

const Form = props => {
    return (
        <form onSubmit={props.submit}>
            <input type="text" placeholder="city" value={props.value} onChange={props.change}/>
            <button>search</button>
        </form>
    )
}
export default Form;
