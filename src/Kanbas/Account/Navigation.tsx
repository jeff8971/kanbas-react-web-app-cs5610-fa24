import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer); // Get currentUser from Redux store
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0 me-5">
      {links.includes("Signin") && (
        <Link
          to="/Kanbas/Account/Signin"
          className={`list-group-item ${pathname === "/Kanbas/Account/Signin" ? "active" : ""} border border-0`}
        >
          Sign in
        </Link>
      )}
      {links.includes("Signup") && (
        <Link
          to="/Kanbas/Account/Signup"
          className={`list-group-item ${pathname === "/Kanbas/Account/Signup" ? "active" : ""} text-danger border border-0`}
        >
          Sign up
        </Link>
      )}
      {links.includes("Profile") && (
        <Link
          to="/Kanbas/Account/Profile"
          className={`list-group-item ${pathname === "/Kanbas/Account/Profile" ? "active" : ""} text-danger border border-0`}
        >
          Profile
        </Link>
      )}
    </div>
  );
}
