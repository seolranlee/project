import React from 'react';

export default class ContactInfo extends React.Component{

	render(){

		return(

			<li>
				<div className="phonecard" onClick={this.props.onClick}>
					<div className="cardtop">
						<div className="cardtop_l">
							<div className="user_id">{this.props.contact.name}</div>
							<div className="uploaded_date">{this.props.contact.date}</div>
						</div>
						<div className="cardtop_r">
							<a href="#"><i className="fa fa-pencil fa-2x" aria-hidden="true"></i></a>
							<a href="#" onClick={this.props.onRemove}><i className="fa fa-trash fa-2x" aria-hidden="true"></i></a>
						</div>
					</div>
					<div className="card_content">
						<div className="phone_number">
							{this.props.contact.phone}
						</div>
					</div>
					<div className="card_bottom">
						<div className="like">
							<a href="#">
								<i className="fa fa-star fa-2x" aria-hidden="true"></i>
								<span>{this.props.contact.like}</span>
							</a>
						</div>
					</div>
				</div>
			</li>

		);
	}
}


