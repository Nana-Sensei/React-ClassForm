import React from 'react';

class ClassForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
        <div className='Container'>
      <form onSubmit={this.handleSubmit}>
      <h1>React Class Form</h1>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Email Address:
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default ClassForm;
