import React from 'react'

class Add extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            productName: "",
            price: 1
        }
    }

    handleProductChange = (e) =>{
        this.setState({
          productName: e.target.value
        })
        
      }
  
      handlePriceChange = (e) => {
        this.setState({
          price: e.target.value
        })
      }
       
     
    render() { 
        return ( 

            <>
            
    
                <h1>Add</h1>
                <input 
          type="text"
          onChange={this.handleProductChange} 
          value={this.state.productName} />

          <input type="range" 
          onChange={this.handlePriceChange} 
          value={this.state.price} 
          min={1} 
          max={10} />

         <button onClick={ ()=> {this.props.addItem(this.state.price,this.state.productName)}}>Add</button>
            
            </>

         );
    
}
}
 
export default Add;