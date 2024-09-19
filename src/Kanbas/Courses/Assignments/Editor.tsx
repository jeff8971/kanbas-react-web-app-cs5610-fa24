export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">
          <h3>Assignment Name</h3>
        </label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br />
        <br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
          your Web application running on Netlify. The landing page should include
          the following: Your full name and section Links to each of the lab
          assignments Link to the Kanbas application Links to all relevant source
          code repositories The Kanbas application should include a link to
          navigate back to the landing page.
        </textarea>
        <br />
        <table id="wd-inputs">
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display">
                <option value="PERCENTAGE">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-type">
                <option value="ONLINE">Online</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-option">Online Entry Options</label>
              <br />
              <input type="checkbox" name="check-option" id="wd-chkbox-text" />
              <label htmlFor="wd-chkbox-text">Text Entry</label>
              <br />
  
              <input type="checkbox" name="check-option" id="wd-chkbox-website" />
              <label htmlFor="wd-chkbox-website">Website URL</label>
              <br />
  
              <input type="checkbox" name="check-option" id="wd-chkbox-media" />
              <label htmlFor="wd-chkbox-media">Media Recordings</label>
              <br />
  
              <input
                type="checkbox"
                name="check-option"
                id="wd-chkbox-annotation"
              />
              <label htmlFor="wd-chkbox-annotation">Student Annotation</label>
              <br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign">Assign</label>
            </td>
            <td align="left" valign="top">
              <label htmlFor="wd-assign">Assign to</label>
              <br />
              <input id="wd-assign" value={"Everyone"} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-due">Due</label>
              <br />
              <input type="date" id="wd-due" value="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-from">Available from</label>
              <br />
              <input type="date" id="wd-from" value="2024-05-06" />
            </td>
            <td>
              <label htmlFor="wd-until">Until</label>
              <br />
              <input type="date" id="wd-until" value="2024-05-20" />
            </td>
          </tr>
        </table>
        <hr />
        <table id="wd-buttons" width="100%">
          <tr>
            <td></td>
            <td style={{ textAlign: "right" }}>
              <button id="wd-cancel" type="button">
                Cancel
              </button>
              &nbsp;
              <button id="wd-save" type="button">
                Save
              </button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
  