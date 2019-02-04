import React,{ Component } from 'react';
import Main from '../../hoc/Main';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDrawer:true
    }
    sideDrawerHandler= () =>{
        this.setState({showSideDrawer:false});
    }
    sideDrawerToggle = () =>{
        this.setState((prevState) =>{
            return{showSideDrawer: !prevState.showSideDrawer};
        });
    }
    render (){
        return(
            <Main>
            <Toolbar drawerClicked={this.sideDrawerToggle} />
            <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.sideDrawerHandler}/>
            <main className="Content">
                {this.props.children}
            </main>
            </Main>
        );
    }
}
export default Layout;