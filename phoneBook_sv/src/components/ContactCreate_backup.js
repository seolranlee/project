import React from 'react';

export default class ContactCreate extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			name: '',
			phone: '',
			date:'',
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);

	}

	handleChange(e) {
 		let nextState = {};
 		nextState[e.target.name] = e.target.value;
 		this.setState(nextState);
 		// 이해안감

 	}

 	handleClick() {
 		const contact = {
 			name: this.state.name,
 			phone: this.state.phone,
 			date: this.state.date,
 		};

 		this.props.onCreate(contact);

 		this.setState({
 			name: '',
 			phone: '',
 			date:'',
 		})
 	}


	render(){

		return(

			<div>
				<h2>Create Contact</h2>
				<p>
					<input
						type="text"
						name="name"
						placeholder="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="phone"
						placeholder="phone"
						value={this.state.phone}
						onChange={this.handleChange}
					/>
					<input
						type="text"
						name="date"
						placeholder="date"
						value={this.state.date}
						onChange={this.handleChange}
					/>
					<button onClick={this.handleClick}>Create</button>
				</p>
			</div>

		);
	}
}
