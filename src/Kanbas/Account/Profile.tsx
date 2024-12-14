import * as client from "./client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer"; // Import the action to update currentUser in the Redux store

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };
  
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfile(currentUser);
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => { fetchProfile(); }, []);

  return (
    <div id="wd-profile-screen" style={{ width: "400px" }}>
      <h3>Profile</h3>
      {profile && (
        <>
          <input
            defaultValue={profile.username}
            id="wd-username"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <input
            defaultValue={profile.password}
            type="password"
            id="wd-password"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
          <input
            defaultValue={profile.firstName}
            id="wd-firstname"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
          <input
            defaultValue={profile.lastName}
            id="wd-lastname"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
          <input
            defaultValue={profile.dob}
            id="wd-dob"
            type="date"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <input
            defaultValue={profile.email}
            id="wd-email"
            type="email"
            className="form-control mb-2"
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            defaultValue={profile.role}
            id="wd-role"
            className="form-select mb-2"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
          <button onClick={signout} className="btn btn-danger w-100 mb-2" id="wd-signout-btn">Sign out</button>
        </>
      )}
    </div>
  );
}
