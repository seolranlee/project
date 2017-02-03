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
		this.handleKeyPress = this.handleKeyPress.bind(this);

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

 	handleKeyPress(e) {
 		if(e.charCode === 13) {		// 13은 enter란 뜻
 			this.handleClick();
 		}
 	}


	render(){

		return(


			<div id="floating_area">
				<a href="#self" className="floating_btn">
					<div className="write_btn">
						<i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
					</div>
				</a>
				<div className="writecard">
					<div className="writeform">
						{/*<a href="#" className="card_close"><i className="fa fa-times fa-3x" aria-hidden="true"></i></a>*/}
						<ul>
							<li>
								<div className="form_title">
									<label htmlFor="user_name">name</label>
								</div>
								<div className="form_content">
									<input
										type="text"
										id="user_name"
										name="name"
										placeholder="name"
										value={this.state.name}
										onChange={this.handleChange}
										className="i_text"
									/>
								</div>
							</li>

							<li>
								<div className="form_title">
									<label htmlFor="user_date">date</label>
								</div>
								<div className="form_content">
									<input
										type="text"
										id="user_date"
										name="date"
										placeholder="date"
										value={this.state.date}
										onChange={this.handleChange}
										className="i_text"
									/>
								</div>
							</li>

							<li>
								<div className="form_title">
									<label htmlFor="user_phone">phonenumber</label>
								</div>
								<div className="form_content">
									<div className="phone_item">

										<input
											type="text"
											name="phone"
											id="user_phone"
											placeholder="phone"
											value={this.state.phone}
											onChange={this.handleChange}
											onKeyPress={this.handleKeyPress}
										/>

									</div>
								</div>
							</li>
						</ul>
						<div className="form_btn_wrap">
							<a href="#reg" className="reg_btn" onClick={this.handleClick}>registration</a>
						</div>
					</div>
				</div>
			</div>

		);
	}
}
