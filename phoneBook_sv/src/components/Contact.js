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
 			contactData: null,
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
 	

 		this.createData(contact);


 		alert('등록되었습니다');

 		$('.writecard').removeClass('on');
		$('.write_btn').removeClass('off');


 	}

 	createData(contact){
 		console.log(contact);

 		$.ajax({
			url:'http://jolsejolse.iptime.org:8023/api/users/',
			type:'POST',
			data:contact,
			dataType:'json',
			success:function(data){

				console.log(data);

				var new_data = {

					id : data.user_id,
					user_name : contact.user_name,
					user_phone : contact.user_phone,
					user_date : contact.user_date,
					user_like : 0,
				}


				this.setState({
		 			contactData: update(this.state.contactData, { $push: [new_data] } )
		 		});
			}.bind(this)
		});
 	}


 	handleRemove(){

 		let id = this.state.contactData[this.state.selectedKey].id;

 		console.log(id);

 		this.removeData(id)
 	}


 	removeData(id){
 		console.log(id);

 		$.ajax({
			url:'http://jolsejolse.iptime.org:8023/api/users/'+id,
			type:'DELETE',
			dataType:'json',
			success:function(data){

				console.log(data);
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

			}.bind(this)
		});
 	}


 	handleEdit(contact, id){
 		this.editData(contact, id);
 		
 	}

 	editData(contact, id){
 		$.ajax({
			url:'http://jolsejolse.iptime.org:8023/api/users/' + id,
			type:'PUT',
			data:contact,
			dataType:'json',
			success:function(data){

				console.log(data);

				this.setState({
		 			contactData: update(this.state.contactData, 
		 				{
		 					[this.state.selectedKey] : {
		 						user_name: { $set: contact.user_name },
		 						user_phone: { $set: contact.user_phone },
		 						user_date: { $set: contact.user_date },
		 					}

		 				}
		 			)
		 		});
			}.bind(this)
		});
 	}

	callData(){
		$.ajax({
			url:'http://jolsejolse.iptime.org:8023/api/users/',
			type:'GET',
			dataType:'json',
			success:function(data){
				this.setState({
					contactData : data,
				});
			}.bind(this)
		});
	}


	render(){

		const mapToComponents = (data) => {

			if ( data ) {
	 			// data.sort();
	 			data = data.filter(

	 				(contact) => {
	 					return contact.user_name.toLowerCase().indexOf(this.state.keyword) > -1;
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

 			this.callData();
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