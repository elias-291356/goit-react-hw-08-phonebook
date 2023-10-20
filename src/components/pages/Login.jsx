import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/userReducer';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.user.userData);

  useEffect(() => {
    if (!userData) return;
    navigate(`/contacts`, { replace: true });
  }, [userData, navigate]);

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
