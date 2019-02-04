import React from 'react';
import './Button.css';

const button= (props) => {
    let classes=['Button'];
    if(props.btnType==='Danger'){
        classes.push('Danger');
    }else if(props.btnType==='Success'){
        classes.push('Success');
    }
    else{
        classes=['Button'];
    }
    return(<button onClick=
    {props.clicked}
    className={classes.join(' ')}
    >{props.children}</button>);
};
export default button;