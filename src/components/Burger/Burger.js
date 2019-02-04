import React from 'react';
import './Burger.css'
import BurgerIngre from './Burgeringre/Burgeringre';
const burger= (props) =>{
    let transformIg=Object.keys(props.ingre).map(igkeys =>{return [...Array(props.ingre[igkeys])].map((_,i) =>
        {return( <BurgerIngre key={igkeys+i} type={igkeys}/>);});}).reduce((arr,el) => {
            return (arr.concat(el));
        },[]);
        if(transformIg.length===0){
            transformIg=<p>Please Insert Some Ingredients!</p>;
        }
    return(
        <div className="Burger">
            <BurgerIngre type="bread-top"/>
            {transformIg}
            <BurgerIngre type="bread-bottom"/>
            
        </div>
    );
};
export default burger;