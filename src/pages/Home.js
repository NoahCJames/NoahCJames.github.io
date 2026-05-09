import StatusBadge from '../components/StatusBadge';
import './Home.css';

function Home() {
  return (
    <main className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-name">Noah James</h1>
          <h2>Software Engineering Student</h2>
          <StatusBadge />
          <div className="contact-info">
            <h3>Contact Me:</h3>
            <p>
              <a href="mailto:noahcj500@gmail.com">Personal Email</a> | 
              <a href="mailto:jamesnc@rose-hulman.edu"> School Email</a>
            </p>
            <p><a href="tel:+16144836123">Mobile Phone</a></p>
          </div>
        </div>
        <div className="hero-image">
          <img src="/Portfolio-Photo.jpg" alt="Noah James" className="profile-photo" />
        </div>
      </section>
    </main>
  );
}

export default Home;