import React from 'react';

export default class ContactInfo extends React.Component{

	constructor(props){
 		super(props);
 		this.state = {
 			isEdit : false,
 			name: '',
 			phone: '',
 		};

 		this.handleToggle = this.handleToggle.bind(this);
 		this.handleChange = this.handleChange.bind(this);
 		this.handleEdit = this.handleEdit.bind(this);
 		this.notSelected = this.notSelected.bind(this);
 		this.handleKeyPress = this.handleKeyPress.bind(this);
 	}

 	handleToggle(){
 		if(!this.state.isEdit) {
 			this.setState({
 				name: this.props.contact.name,
 				phone: this.props.contact.phone,
 				date: this.props.contact.date,
 			})
 		} else {
 			this.handleEdit();	// 중요.
 		}
 		this.setState({
 			isEdit: !this.state.isEdit
 		});

 		console.log(this.state.isEdit)
 	}

 	handleChange(e) {
 		let nextState = {};
 		nextState[e.target.name] = e.target.value;
 		this.setState(nextState);
 		// 이해안감

 	}

 	handleEdit(){
 		this.props.onEdit(this.state.name, this.state.phone, this.state.date);
 	}

 	notSelected(){
		alert('선택을 해주세요');
	}

	handleKeyPress(e) {
 		if(e.charCode === 13) {		// 13은 enter란 뜻
 			this.handleToggle();
 		}
 	}


	render(){

		const details = (
			<div className="phonecard" onClick={this.props.onClick}>
				<div className="cardtop">
					<div className="cardtop_l">
						<div className="user_id">{this.props.contact.name}</div>
						<div className="uploaded_date">{this.props.contact.date}</div>
					</div>
					<div className="cardtop_r">
						<a href="#a" onClick={this.handleToggle}><i className="fa fa-pencil fa-2x" aria-hidden="true">{this.state.isEdit ? 'Ok' : 'Edit' }</i></a>
						<a href="#a" onClick={this.props.onRemove}><i className="fa fa-trash fa-2x" aria-hidden="true"></i></a>
					</div>
				</div>
				<div className="card_content">
					<div className="phone_number">
						{this.props.contact.phone}
					</div>
				</div>
				<div className="card_bottom">
					<div className="like">
						<a href="#a">
							<i className="fa fa-star fa-2x" aria-hidden="true"></i>
							<span>{this.props.contact.like}</span>
						</a>
					</div>
				</div>
			</div>
		)

		const edit = (

 			<div className="phonecard" onClick={this.props.onClick}>
				<div className="cardtop">
					<div className="cardtop_l">
						<div className="user_id">
							<input
								type="text"
								name="name"
								placeholder="name"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</div>
						<div className="uploaded_date">

							<input
								type="text"
								name="date"
								placeholder="date"
								value={this.state.date}
								onChange={this.handleChange}
							/>

						</div>
					</div>
					<div className="cardtop_r">
						<a href="#a" onClick={this.handleToggle}><i className="fa fa-pencil fa-2x" aria-hidden="true">{this.state.isEdit ? 'Ok' : 'Edit' }</i></a>
						<a href="#a" onClick={this.props.onRemove}><i className="fa fa-trash fa-2x" aria-hidden="true"></i></a>
					</div>
				</div>
				<div className="card_content">
					<div className="phone_number">
						<input
							type="text"
							name="phone"
							placeholder="phone"
							value={this.state.phone}
							onChange={this.handleChange}
							onKeyPress={this.handleKeyPress}
						/>
					</div>
				</div>
				<div className="card_bottom">
					<div className="like">
						<a href="#a">
							<i className="fa fa-star fa-2x" aria-hidden="true"></i>
							<span>{this.props.contact.like}</span>
						</a>
					</div>
				</div>
			</div>
		)

		const view = this.state.isEdit ? edit : details;


		return(

			<li>
				{view}
			</li>

		);
	}
}


