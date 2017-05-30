import React from 'react'
import {render} from 'react-dom'

export default class Header extends React.Component{
	constructor(props){
		super(props)
	};
	render(){
		return(
		<h1>{this.props.title}</h1>
		)
	}
		
}