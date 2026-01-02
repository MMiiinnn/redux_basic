import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../store/index";
import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();

  const account = useSelector((state) => state.auth.account);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = (fd) => {
    const data = Object.fromEntries(fd.entries());

    console.log(data);

    dispatch(authActions.login(data));
  };

  return (
    <main className={classes.auth}>
      {isAuth && (
        <>
          <p>{account.email}</p>
          <p>{account.password}</p>
        </>
      )}
      <section>
        <form action={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
