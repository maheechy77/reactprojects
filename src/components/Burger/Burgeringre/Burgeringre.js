import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredient.css';

class BurgerIngre extends Component {
    render() {
        let ingre=null;
    switch (this.props.type){
        case ('bread-bottom'):
        ingre=<div className="BreadBottom"></div>;
        break;
        case ('bread-top'):
        ingre=(<div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
            </div>);
        break;
        case ('meat'):
        ingre=<div className="Meat"></div>;
        break;
        case ('cheese'):
        ingre=<div className="Cheese"></div>;
        break;
        case ('bacon'):
        ingre=<div className="Bacon"></div>;
        break;
        case ('salad'):
        ingre=<div className="Salad"></div>;
        break;
        default:
            ingre=null;
    }
    return ingre;
    }
};

BurgerIngre.prpoTypes={
    type:PropTypes.string.isRequired
};
export default BurgerIngre;