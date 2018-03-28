import React from 'react';
import TextField from 'material-ui/TextField';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            hintText="Name"
          />
        </div>
        <div>
          <TextField
            hintText="Email"
          />
        </div>
        <div>
          <TextField
            hintText="Password"
          />
        </div>
        <div>
          <TextField
            hintText="Phone Number"
          />
        </div>
      </div>
    )
  }
}

export default User;
