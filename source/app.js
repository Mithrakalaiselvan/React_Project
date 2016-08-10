import React,{Component} from 'react';
import KanbanBoard from './KanbanBoard';
// class Hello extends React.Component { 
// 	render() {
//           return (
//               <h1>Hello World</h1>
// ); 
// }
// }
// React.render(<Hello />, document.getElementById('root'));

let cardsList = [
{
	id:1,
	title:"Read the book",
	description:"I should read the whole book",
	status:"in-progress",
	tasks:[]
},
{
	id:2,
	title:"Write Some Code",
	description:"Code along with the samples in the book",
	status:"todo",
	tasks:[
	{
		id:1,
		name:"ContactList Examples",
		done:true
	},
	{
		id:2,
		name:"Kanban Example",
		done:false
	},
	{
		id:3,
		name:"My Own Experiments",
		done:false
	}
	]
}
]

React.render(<KanbanBoard cards = {cardsList} />,document.getElementById('root'));
