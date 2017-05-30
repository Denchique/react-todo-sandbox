import React from 'react'
import {render} from 'react-dom'

export default class Comment extends React.Component{
	constructor(props){
		super(props)
		console.log("hello react")
	}
	render(){
		return(
			<h1>This is react</h1>
			)
	}
}