import './Resume.css';

function Resume() {
  return (
    <div className="resume-page">
      <header className="resume-header">
        <h2>Resume</h2>
        <a 
          href="/Noah_James_Resume.pdf" 
          download 
          className="download-btn"
        >
          Download PDF
        </a>
      </header>

      <section className="resume-section">
        <h3>Education</h3>
        <div className="resume-item">
          <div className="item-header">
            <strong>Rose-Hulman Institute of Technology</strong>
            <span>May 2028</span>
          </div>
          <p>B.S. in Software Engineering | GPA: 3.24 (Major: 3.40)</p>
          <p className="honors">Dean's List: Spring & Fall 2025</p>
        </div>
      </section>

      <section className="resume-section">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-cat">
            <strong>Languages:</strong> Java, C, Python, JavaScript, SQL, HTML/CSS
          </div>
          <div className="skill-cat">
            <strong>Software:</strong> React, Git, VS Code, Linux, GameMaker
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h3>Leadership & Activities</h3>
        <ul>
          <li>Triangle Fraternity - Rose Tech Chapter</li>
          <li>IFC Public Relations and Activities Chair</li>
          <li>Career Services Volunteer</li>
        </ul>
      </section>

      <section className="resume-embed-container">
        <h3>Full Resume Preview</h3>
        <iframe 
          src="/Noah_James_Resume.pdf" 
          title="Noah James Resume"
          className="resume-iframe"
        />
      </section>
    </div>
  );
}

export default Resume;