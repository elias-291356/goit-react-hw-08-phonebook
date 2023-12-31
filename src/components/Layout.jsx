import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutThunk, refreshUserThunk } from 'redux/userReducer';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userData);
  const handleLogOut = () => {
    dispatch(logOutThunk());
  };
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
      <header>
        <nav>
          <ul>
            <Link to="/">home </Link>
            {userData ? (
              <>
                <Link to="/contacts">Contacts</Link>
                <p>Hello, {userData.name}</p>
                <button
                  onClick={handleLogOut}
                  className="button is-danger is-light"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login">login</Link>
                <Link to="/register"> register</Link>
              </>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Suspense>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
