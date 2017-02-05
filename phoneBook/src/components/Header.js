import React from 'react';

export default class Header extends React.Component{

	constructor(props){
		super(props);

		this.updateValue = this.updateValue.bind(this);
	}

	updateValue(e){

		let value = e.target.value;
		this.props.updateValue(value)
	}


	render(){


		return(
			<header className="">
				<div className="wrap">
					<div className="header_l">
						<h1><a href="#">React Project</a></h1>
					</div>
					<div className="header_r">
						<div className="search_box">
							<input
								type="text"
								name="keyword"
								id="search"
								placeholder="Search"
								value={this.props.keyword}
								onChange={this.updateValue}
							/>
						</div>
						<a href="#a" className="ico_search">
							<i className="fa fa-search fa-2x" aria-hidden="true"></i>
						</a>
					</div>
				</div>
			</header>
		);
	}
}