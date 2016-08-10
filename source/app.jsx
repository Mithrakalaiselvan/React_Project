import React,{Component} from 'react';
// class Hello extends Component { 
// 	render() {
// 		var place = 'world';
//           return (
//               <h1>Hello {place} !!</h1>
// ); 
// }
// }
// React.render(<Hello />, document.getElementById('root'));



//parent Component

class GroceryList extends Component{
	render(){
		return(
		<ul>
		   <ListItem quantity="1">Bread</ListItem>
		   <ListItem quantity="6">Eggs</ListItem>
		   <ListItem quantity="2">Milk</ListItem>
		</ul>
		);
	}
}

//child Component

class ListItem extends Component{
	render(){
		return(
		 <li>
		    {this.props.quantity}x {this.props.children}
		 </li>
		);
	}
}

React.render(<GroceryList />,document.getElementById('root'));



