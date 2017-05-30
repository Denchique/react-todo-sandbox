import React from 'react'
import {render} from 'react-dom'
import List from './components/List'
import Header from './components/Header'



let app_title="React todo sandbox";
let default_todos = ["item1","item2","item3"];




render(
	<div>
	<Header title={app_title} />
	<hr></hr>
	<List todos={default_todos}/>
	</div>,
	document.getElementById('root')

	)