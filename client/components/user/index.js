import React from 'react'

class createUserForm extends React.Component {

  component_will_mount() {
    this.setState({ miru: 'orange' })
  }

  render() {
    return (
      <div>
        <h1>Sign up and Organize your Makeup!</h1>;
        <form>
          <input type="text" placeholder="what is your name?" />
          <input type="text" placeholder="create a username" />
          <input type="email" placeholder="what is your email?" />
          <input type="password" placeholder="create a password" />
        </form>
      </div>
    )
  }

}

export default createUserForm
