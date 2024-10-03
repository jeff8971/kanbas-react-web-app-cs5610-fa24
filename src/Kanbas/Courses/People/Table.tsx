import { FaUserCircle } from "react-icons/fa";
import React from "react";

export default function PeopleTable() {
  return (
    <div id="wd-people-table" style={{ textAlign: "left" }}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {/* Tony Stark */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span> <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01T00:00:00.000Z</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>

          {/* Bruce Wayne */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span> <span className="wd-last-name">Wayne</span>
            </td>
            <td className="wd-login-id">001234562S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-11-02T00:00:00.000Z</td>
            <td className="wd-total-activity">15:32:43</td>
          </tr>

          {/* Steve Rogers */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Steve</span> <span className="wd-last-name">Rogers</span>
            </td>
            <td className="wd-login-id">001234563S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-02T00:00:00.000Z</td>
            <td className="wd-total-activity">23:32:43</td>
          </tr>

          {/* Natasha Romanoff */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Natasha</span> <span className="wd-last-name">Romanoff</span>
            </td>
            <td className="wd-login-id">001234564S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2020-11-05T00:00:00.000Z</td>
            <td className="wd-total-activity">13:23:34</td>
          </tr>

          {/* Thor Odinson */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Thor</span> <span className="wd-last-name">Odinson</span>
            </td>
            <td className="wd-login-id">001234565S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-12-01T00:00:00.000Z</td>
            <td className="wd-total-activity">11:22:33</td>
          </tr>

          {/* Bruce Banner */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Bruce</span> <span className="wd-last-name">Banner</span>
            </td>
            <td className="wd-login-id">001234566S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-12-01T00:00:00.000Z</td>
            <td className="wd-total-activity">22:33:44</td>
          </tr>

          {/* Frodo Baggins */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Frodo</span> <span className="wd-last-name">Baggins</span>
            </td>
            <td className="wd-login-id">001234567S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">FACULTY</td>
            <td className="wd-last-activity">2020-12-02T00:00:00.000Z</td>
            <td className="wd-total-activity">44:33:22</td>
          </tr>

          {/* Aragorn Elessar */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Aragorn</span> <span className="wd-last-name">Elessar</span>
            </td>
            <td className="wd-login-id">001234568S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2020-12-04T00:00:00.000Z</td>
            <td className="wd-total-activity">12:23:34</td>
          </tr>

          {/* Legolas Greenleaf */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Legolas</span> <span className="wd-last-name">Greenleaf</span>
            </td>
            <td className="wd-login-id">001234569S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">FACULTY</td>
            <td className="wd-last-activity">2020-11-11T00:00:00.000Z</td>
            <td className="wd-total-activity">21:32:43</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
