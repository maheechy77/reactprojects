import React,{ Component } from 'react';
import './Modal.css';
import Main from '../../../hoc/Main';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show !== this.props.show;
    }
    render(){
        return(<Main>
            <Backdrop show={this.props.show} clicked={this.props.modelClosed} />
                <div className="Modal"
                    style={{
                        transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity:this.props.show ? '1':'0'
                    }}>
                    {this.props.children}
                </div>
            </Main>
            );
        }
    };
export default  Modal;