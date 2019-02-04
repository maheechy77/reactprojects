import React, { Component } from 'react';
import Main from '../../hoc/Main';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const ingre_prices={
        salad:0.5,
        cheese:0.4,
        meat:1.0,
        bacon:0.7
}

class BurgerBuilder extends Component{
    state={
        ingre:{
            salad:0,
            cheese:0,
            meat:0,
            bacon:0
        },
        totalprice:4,
        purchasable:false,
        purchasing:false
    }
    purchaseHandler =() =>{
        this.setState({purchasing:true});
    }
    purchaseCancelHandler =() =>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler =() =>{
        alert('Your Total Bill Is: '+this.state.totalprice.toFixed(2));
    }
    updatePurchasable (ingre){
        const sum=Object.keys(ingre).map(igkey =>{ return ingre[igkey];}).reduce((sum,el)=>{
            return sum+el;
        },0);
        this.setState({purchasable:sum>0});
    }
    addIngre = (type) =>{
        const oldcount=this.state.ingre[type];
        const updatecount=oldcount+1;
        const updateingre ={
            ...this.state.ingre
        };
        updateingre[type]=updatecount;
        const  priceAddition=ingre_prices[type];
        const oldPrice=this.state.totalprice;
        const newPrice=oldPrice+priceAddition;
        this.setState({ingre:updateingre,totalprice:newPrice});
        this.updatePurchasable(updateingre);
    }
    removeIngre = (type) =>{
        const oldcount=this.state.ingre[type];
        if(oldcount <= 0){
            return;
        }
        const updatecount=oldcount-1;
        const updateingre ={
            ...this.state.ingre
        };
        updateingre[type]=updatecount;
        const  priceSub=ingre_prices[type];
        const oldPrice=this.state.totalprice;
        const newPrice=oldPrice-priceSub;
        this.setState({ingre:updateingre,totalprice:newPrice});
        this.updatePurchasable(updateingre);
    }
    render(){
        const disabledInfo={
            ...this.state.ingre
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key] <= 0
        }
        return(
            <Main>
                <Modal show={this.state.purchasing}
                modelClosed={this.purchaseCancelHandler}>
                    <OrderSummary pc={this.purchaseCancelHandler}
                    pcon={this.purchaseContinueHandler}
                    tprice={this.state.totalprice}
                    ingre={this.state.ingre}/>
                </Modal>
                <Burger ingre={this.state.ingre}/>
                <BuildControls 
                purchasable={this.state.purchasable}
                ingreAdd={this.addIngre}
                ingresub={this.removeIngre}
                disabled={disabledInfo}
                price={this.state.totalprice}
                ordered={this.purchaseHandler}
                />
            </Main>
        );
    }
};
export default BurgerBuilder;