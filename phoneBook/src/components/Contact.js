import React from 'react';
import Header from './Header';
import ContactInfo from './ContactInfo';
import ContactCreate from './ContactCreate';

import update from 'react-addons-update'

export default class Contact extends React.Component{

	constructor(props){
 		super(props);
 		this.state = {
 			selectedID : -1,
 			selectedKey : -1,
 			keyword: '',
 			contactData: [
 				{ name: 'Wendy', date: '1994.02.21', phone: '010-0000-0001', like: 11, id: 1 },
 				{ name: 'Irene', date: '1991.03.29', phone: '010-0000-0002', like: 22, id: 2 },
 				{ name: 'Seulgi', date: '1994.02.10', phone: '010-0000-0003', like: 33, id: 3 },
 				{ name: 'Joy', date: '1996.09.03', phone: '010-0000-0004', like: 44, id: 4 },
 				{ name: 'Yeri', date: '1999.03.05', phone: '010-0000-0004', like: 55, id: 5 },
 			],

 		}

 		this.handleChange = this.handleChange.bind(this);
 		this.handleClick = this.handleClick.bind(this);
 		this.handleCreate = this.handleCreate.bind(this);
 		this.handleRemove = this.handleRemove.bind(this);
 		this.handleEdit = this.handleEdit.bind(this);
 	}

 	handleChange(value) {
 		this.setState({
 			keyword : value
 		})

 	}

 	handleClick(contact, key){

 		for(var i = 0; i<this.state.contactData.length; i++){
 			if( this.state.contactData[i].id == contact.id ){
 				this.setState({
 					selectedKey: i
 				})
 			}
 		}

 		this.setState({
 			selectedID : contact.id
 		});

 		console.log(this.state.selectedKey)
 	}

 	handleCreate(contact){
 		this.setState({
 			contactData: update(this.state.contactData, { $push: [contact] } )
 		});
 	}


 	handleRemove(){

 		console.log(this.state.selectedKey);
 		if(this.state.selectedKey < 0){
 			return;
 			// alert('지우실 카드를 먼저 선택해 주세요.')
 		}
 		this.setState({
 			contactData: update(this.state.contactData,
 				{ $splice: [[this.state.selectedKey, 1]] }
 			),
 			selectedKey: -1
 		})
 	}

 	handleEdit(name, phone, date){
 		this.setState({
 			contactData: update(this.state.contactData, 
 				{
 					[this.state.selectedKey] : {
 						name: { $set: name },
 						phone: { $set: phone },
 						date: { $set: date }
 					}

 				}
 			)
 		})
 	}


	render(){

		const mapToComponents = (data) => {
 			data.sort();
 			data = data.filter(

 				(contact) => {
 					return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
 				}
 			);
 			return data.map((contact, i)=>{
 				return (<ContactInfo
 							contact={contact}
 							data={this.state.contactData[this.state.selectedKey]}
 							onRemove={this.handleRemove}
 							isSelected={this.state.selectedID != -1}
 							key={i}
 							onClick={()=>this.handleClick(contact, i)}
 							onEdit={this.handleEdit}
 						/>);
 			});
 		}


		return(
			<div>
				<Header
					keyword={this.state.keyword}
					updateValue={this.handleChange}
				/>

				<section>
					<div className="wrap">
						<div className="phonecard_list">
							<ul>
								{mapToComponents(this.state.contactData)}
							</ul>
						</div>
					</div>
				</section>

				<ContactCreate 
 					onCreate={this.handleCreate}
 				/>

			</div>
		);
	}
}