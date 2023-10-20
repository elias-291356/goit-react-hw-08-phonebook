import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/userReducer';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const formChildren = event.currentTarget.elements;

    const email = formChildren.userEmail.value;
    const password = formChildren.userPassword.value;

    console.log(email);
    console.log(password);

    dispatch(loginThunk({ email, password }));
    event.currentTarget.reset();
  };
  return (
    <div>
      <h1>Login to account</h1>
      <form className="field" onSubmit={handleSubmit}>
        <label className="label">
          <p>Email</p>
          <input
            className="input"
            type="email"
            placeholder="examplepwd12345"
            name="userEmail"
            required
          />
        </label>
        <label className="label">
          <p>Password</p>
          <input
            className="input"
            type="password"
            minLength={7}
            placeholder="examplepwd12345"
            name="userPassword"
            required
          />
        </label>
        <button className="button is-link is-light" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
