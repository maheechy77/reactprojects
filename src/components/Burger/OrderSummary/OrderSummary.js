import React from 'react';
import Main from '../../../hoc/Main';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
    const ingreSummary=Object.keys(props.ingre).map(igkeys=>
        {return( <li key={igkeys}><span style={{textTransform:'capitalize'}}>{igkeys}:</span>{props.ingre[igkeys]}</li>)});
        
  return(
      <Main>
        <h2>Your Order Summary:</h2>
        <ul>
            {ingreSummary}
        </ul>
        <p><strong>Total Price :{props.tprice.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={props.pc}>CANCEL</Button>
        <Button btnType="Success" clicked={props.pcon}>CONTINUE</Button>
      </Main>
  );  
};
export default  orderSummary;