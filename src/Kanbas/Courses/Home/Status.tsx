export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ maxWidth: "200px" }}>
      <h2>Course Status</h2>
      <div style={{ display: "flex", gap: "10px" }}>
          <button>Unpublish</button>
          <button>Publish  </button>
      </div>
      <div style={{ marginTop: "10px", display: "flex", alignItems: "flex-start", flexDirection: "column", gap: "2px" }}>
          <button>Import Existing Content</button>
          <button>Import from Commons</button>
          <button>Choose Home Page</button>
          <button>View Course Stream</button>
          <button>New Announcement</button>
          <button>New Analytics</button>
          <button>View Course Notifications</button>
      </div>
    </div>
);}
