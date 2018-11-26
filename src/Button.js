import React from 'react'

const Button = (props) => (
	<React.Fragment>
		<button
			onClick={ props.inc }
			style={{
				width: '100%',
				height: 50
			}}
		>
			{ props.name }
		</button>
		<ul>
			{ props.count.map(i =>
				<li key={ i }>{i * 2}</li>
			) }
		</ul>
	</React.Fragment>
)

export default Button
