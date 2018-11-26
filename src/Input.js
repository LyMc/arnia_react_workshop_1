import React from 'react'

const Input = (props) => (
	<div>
		<input type="text" value={ props.name } onChange={ (event) => props.changeName(event.target.value) }/>
	</div>
)

export default Input
