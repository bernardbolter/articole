import React, { Component} from 'react';
import { observer } from 'mobx-react';
import axios from 'axios';


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
        <p>Please RSVP by October 1<sup>st</sup></p>
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
          <Input label='any dietary restrictions?' type="restrictions" floatingLabel={true} required={true} value={this.props.store.restrictions} onChange={this._handleRestrictions} />

          <Button type='submit' className='mui-btn mui-btn--raised'>Submit</Button>
          {(this.props.store.formSubmitting) ? <img src='../../assets/spinner.gif' /> : null }
          {(this.props.store.success) ? <p className="form-success">Success</p> : null }
          {(this.props.store.error) ? <p className="form-error">There was an error, please try again later</p> : null }
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

  _handleRestrictions = (e) => {
    this.props.store.restrictions = e.target.value;
  }

  _submitForm = (e) => {
    e.preventDefault();
    this.props.store.formSubmitting = true;
    axios.post('https://va4a3a3449.execute-api.us-east-2.amazonaws.com/dev/rsvp', {
      firstName: this.props.store.first_name,
      lastName: this.props.store.last_name,
      email: this.props.store.email,
      attending: this.props.store.attending,
      numberAttending: this.props.store.number_attending,
      restrictions: this.props.store.restrictions
    })
    .then(response => {
      this.props.store.formSubmitting = false;
      this.props.store.first_name = '';
      this.props.store.last_name = '';
      this.props.store.email = ''
      this.props.store.attending = 'yes';
      this.props.store.number_attending = '2';
      this.props.store.restrictions = '';
      this.props.store.success = true;
      console.log(response);
    })
    .catch(error => {
      this.props.store.formSubmitting = false;
      this.props.store.first_name = '';
      this.props.store.last_name = '';
      this.props.store.email = ''
      this.props.store.attending = 'yes';
      this.props.store.number_attending = '2';
      this.props.store.restrictions = '';
      this.props.store.success = true;
      console.log(error);
    })
  }
}
