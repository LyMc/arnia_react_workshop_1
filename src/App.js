import React, { PureComponent } from 'react';
import './App.css';
import Button from './Button'
import Input from './Input'

class App extends PureComponent {
	constructor (props) {
		super(props)
    this.state = {
		  count: [0],
      name: 'text'
    }
    this.incrementCounter = this.incrementCounter.bind(this)
    this.changeName = this.changeName.bind(this)
	}

	incrementCounter() {
		this.setState({
			count: [...this.state.count, this.state.count.length]
		})
  }
	changeName(name) {
		this.setState({
			name: name
		})
  }

	render() {
    return (
      <div className="App">
        <Button
          count={ this.state.count }
          inc={ this.incrementCounter }
          name={ this.state.name }
        />
        { this.state.count && <Input
          name={ this.state.name }
          changeName={ this.changeName }
        /> }
      </div>
    );
  }
}

export default App;
