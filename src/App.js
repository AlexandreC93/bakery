import React from 'react'
import './App.css';
import Button from './components/Button'
import Pay from './components/Pay'
import List from './components/List'
import Add from './components/Add'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Add",
      items: [],
      
    }
  }

  
  isSelected = () =>{
    this.setState({
      activeTab: this.props.children
    })

    if (this.state.activeTab === this.props.children){ 
     
       <h1>{this.props.children}</h1>
    }
    }
  
    selectAdd =()=>{
      this.setState({
        activeTab: "Add"
      })
    }

    selectList = ()=>{
      this.setState({
        activeTab: "List"
      })
     ;
    }

    selectPay =()=>{
      this.setState({
        activeTab: "Pay"
      })
    }

    addItem = (name, price)=>{
      this.setState({
        items: [...this.state.items,{name, price}],
        
        
      })
      
    } 

  

  render() {
    console.log(this.state.items);
console.log(this.state);
    return (

      <>
        <Button
          isSelected={this.state.activeTab === "Add"}
          onClick={this.selectAdd}
          >Add</Button>

        <Button
          isSelected={this.state.activeTab === "List"}
          onClick={this.selectList}
           >List</Button>

        <Button isSelected={this.state.activeTab === "Pay"}
          onClick={this.selectPay}
           >Pay</Button>


        {this.state.activeTab ==="Add" &&
           <Add addItem={this.addItem}/>}

           {this.state.activeTab ==="List" &&
           <List items={this.state.items}/>}
           {this.state.activeTab ==="Pay" &&
           <Pay/>}

          
      </>




    );
    
  }

  
}

export default App;


