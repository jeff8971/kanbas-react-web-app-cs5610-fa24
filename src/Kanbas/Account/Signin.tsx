import {Link} from 'react-router-dom';
export default function Signin() {
  return (
    <div id="signin-screen">
      <h3>Sign in</h3>
      <input id="wd-username" placeholder="Username" /> <br />
      <input id="wd-password" placeholder="Password" type="password"/> <br /> 
      <Link id="wd-signin-btn"
        to="/Kanbas/Account/Profile">Sign in</Link> <br />
      <Link id="wd-signup-link"
        to="/Kanbas/Account/Signup">Sign up</Link>
    </div>
  );
}