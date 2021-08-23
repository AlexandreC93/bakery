import React from 'react'
import Add from './Add'

class Button extends React.Component {
    
    render() { 
        ;
        return ( 

            <>
          <button className={`btn-menu ${this.props.isSelected && 'btn-selected'}`} onClick={this.props.onClick}> {this.props.children} </button>
            </>

         );
    }
}
 
export default Button;