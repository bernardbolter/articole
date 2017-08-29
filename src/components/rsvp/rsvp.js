import React, { Component} from 'react';
import { Form , Text } from 'react-form';

import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

export default class RSVP extends React.Component {
  render() {
    console.log('resvp');
    return (
      <div id='rsvp' className='rsvp'>
        <h1>RSVP</h1>
        <Form
          onSubmit={(values) => {
            console.log(values);
          }}
          validate={({ name }) => {
            return {
              name: !name ? 'A name is required' : undefined
            }
          }}
        >
          {({submitForm}) => {
            return (
              <form onSubmit={submitForm}>
                <Text field='name' placeholder='type something...' />
                <button type='submit'>Submit</button>
              </form>
            )
          }}
        </Form>
      </div>
    );
  }
}
