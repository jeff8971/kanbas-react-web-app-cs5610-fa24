export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ maxWidth: "200px" }}>
      <h2>Course Status</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button id="wd-unpublish-btn" type="button">Unpublish</button>
        <button id="wd-publish-btn" type="button">Publish</button>
      </div>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}
      >
        <button id="wd-import-existing-btn" type="button">Import Existing Content</button>
        <button id="wd-import-commons-btn" type="button">Import from Commons</button>
        <button id="wd-choose-home-btn" type="button">Choose Home Page</button>
        <button id="wd-view-stream-btn" type="button">View Course Stream</button>
        <button id="wd-new-announcement-btn" type="button">New Announcement</button>
        <button id="wd-new-analytics-btn" type="button">New Analytics</button>
        <button id="wd-view-notifications-btn" type="button">View Course Notifications</button>
      </div>
    </div>
  );
}
