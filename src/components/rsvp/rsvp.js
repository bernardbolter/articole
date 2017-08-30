import React, { Component} from 'react';
import { observer } from 'mobx-react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import Button from 'muicss/lib/react/button';

@observer
export default class RSVP extends React.Component {
  render() {
    return (
      <div id='rsvp' className='rsvp'>
        <h1>RSVP</h1>
        <Form className='rsvp-form' onSubmit={this._submitForm}>
          <Input label='first name' floatingLabel={true} required={true} value={this.props.store.first_name} onChange={this._handleFirstName} />
          <Input label='last name' floatingLabel={true} required={true} value={this.props.store.last_name} onChange={this._handleLastName} />
          <Input label='email' type="email" floatingLabel={true} required={true} value={this.props.store.email} onChange={this._handleEmail} />
          <Select name="input" label="are you attending?" value={this.props.store.attending} onChange={this._handleAttending} >
            <Option value="yes" label="yes" />
            <Option value="no" label="no" />
          </Select>
          <Select name="input" label="number attending" value={this.props.store.number_attending} onChange={this._handleNumberAttending} >
            <Option value="2" label="2" />
            <Option value="1" label="1" />
          </Select>

          <Button type='submit' className='mui-btn mui-btn--raised'>Submit</Button>
        </Form>
      </div>
    );
  }

  _handleFirstName = (e) => {
    this.props.store.first_name = e.target.value;
  }

  _handleLastName = (e) => {
    this.props.store.last_name = e.target.value;
  }

  _handleEmail = (e) => {
    this.props.store.email = e.target.value;
  }

  _handleAttending = (e) => {
    this.props.store.attending = e.target.value;
  }

  _handleNumberAttending = (e) => {
    this.props.store.number_attending = e.target.value;
  }

  _submitForm = (e) => {
    e.preventDefault();
    console.log(this.props.store.first_name);
    console.log(this.props.store.last_name);
    console.log(this.props.store.email);
    console.log(this.props.store.attending);
    console.log(this.props.store.number_attending);
  }
}
