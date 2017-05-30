import React from 'react'
import {render} from 'react-dom'


export default class List extends React.Component{
	constructor(props){
		super(props)
		this.state = { todos:this.props.todos }
		this.addTask = this.addTask.bind(this)
		this.inputChange = this.inputChange.bind(this)
	}

	addTask(e){
		if(this.state.input_val){
			this.setState({ todos: this.state.todos.concat(this.state.input_val)})
		}
	}
	inputChange(e){
		this.setState({input_val:e.target.value})
	}
	removeTask(element){
		var index = this.state.todos.indexOf(element)
		this.state.todos.splice(index,1)
		this.forceUpdate()
	}
	
	render(){
		
		return (
			<div >
			<form>
			<input type="text"  className="my-input form-control" onChange={this.inputChange}></input>
				<button  className="my-btn btn btn-success" onClick={this.addTask}> Add task </button>
			</form>
				<ul className="todo-list">{
					this.state.todos.map( (i,index)=>(
						<li key={index}><b>{i}</b> <a href="#" onClick={ ()=> (this.removeTask(i))}> Del</a> </li>
					))}
				</ul>
			</div>
			)
		
			
	}
}