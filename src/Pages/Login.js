import React from "react";
import { connect } from "react-redux"
import { login } from "../Redux/Actions/authActions";
import { Redirect } from "react-router-dom";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const creds = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(creds);

  };
  render() {
    const { uid} = this.props;
    if (uid){
      return <Redirect to="/" />
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Login Page</h1>
            <form onSubmit={this.handleSubmit} id="form">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={this.state.value}
                  onChange={this.handleChange}
                  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
            <h2>Admin email: admin@admin.com</h2>
            <h2>Admin password: admin@</h2>
            <h2>Doctor email: doctor@doctor.com</h2>
            <h2>Doctor password: doctor@</h2>
          </div>
        </div>
      </div>
    );
  }
}
const mStp = (state) => {
  const uid = state.firebase.auth.uid;
  const profile = state.firebase.profile;
  return {
    uid: uid,
    profile: profile
  };
};

export default connect(mStp,{login})(Login);