import React, { useRef } from "react";

function LoginForm() {
  // Give direct access to DOM
  const usernameRef = useRef();
  const passwordRef = useRef();

  const usernameOutPutRef = useRef();
  const passwordOutPutRef = useRef();

  function handleLogin(e) {
    e.preventDefault();
    const userNameInput = usernameRef.current;
    const h1 = usernameOutPutRef.current;
    h1.textContent = userNameInput.value;

    const passwordInput = passwordRef.current;
    const h2 = passwordOutPutRef.current;
    h2.textContent = passwordInput.value;
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          ref={usernameRef}
          type="text"
          name="username"
          placeholder="username"
          required
        />
        <label htmlFor="password">Username</label>
        <input
          id="password"
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="password"
        />
        <input type="submit" value="Login" />
      </form>
      <div>
        <h1 ref={usernameOutPutRef}>Username goes here</h1>
        <h2 ref={passwordOutPutRef}>Pasword goes here</h2>
      </div>
    </div>
  );
}

export default LoginForm;
