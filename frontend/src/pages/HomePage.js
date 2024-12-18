import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Streamline Your Projects with Ease</h1>
          <p>Organize, collaborate, and achieve your goals efficiently.</p>
          <Link to="/register" className="cta-button">Get Started</Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Project Tracker?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGfoCGL0heRkImPh69RRmZ2pI-YEWLOAkDww&s" alt="Feature 1" />
            <h3>Real-time Tracking</h3>
            <p>Track progress in real-time and stay updated with instant notifications.</p>
          </div>
          <div className="feature-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2D2-mtOujmDjXnVwQzXXMURuFljSl-PPdjz8AF1-IxJwqKKyH8Ek8tDq04oY4EPRTJKs&usqp=CAU" alt="Feature 2" />
            <h3>Collaborative Work</h3>
            <p>Seamlessly collaborate with your team and boost productivity.</p>
          </div>
          <div className="feature-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDa0I5WoNfwQqFAAUG6jSEwPAOzeGNOZ0rv8F_GYaIRNYJGaP9z1Ru-9CVvuKAyxzYoE&usqp=CAU" alt="Feature 3" />
            <h3>Easy-to-Use Interface</h3>
            <p>Enjoy a clean and user-friendly experience designed for efficiency.</p>
          </div>
          <div className="feature-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZL7LZjl_49DwNu0vv8V5SvIewN8HELu4w6i7fWiD8s8CsgFFuelfXGSnj6H3B8qElq8&usqp=CAU" alt="Feature 4" />
            <h3>Customizable Solutions</h3>
            <p>Tailor the platform to suit your project’s unique requirements.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0JzpLl8SOb-E_kSCquU5bZk7JxRnOEE5pM9fkIMbYA092KUk9nAi3jtJHVfWuWGfDl0&usqp=CAU" alt="About Us" className="about-image" />
          <div className="about-text">
            <h2>About Project Tracker</h2>
            <p>
              Project Tracker is a robust tool designed to simplify your project management process.
              From tracking assignments to updating project scores, we provide all the essential
              tools to help individuals and teams stay on track and achieve their objectives.
            </p>
            <p>
              Our platform combines simplicity and powerful features, ensuring everyone from
              beginners to professionals can get the most out of their projects.
            </p>
            <Link to="/projects" className="cta-button secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Project Tracker has completely revolutionized the way we handle projects!"</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>"The best project management tool I’ve used in years. Highly recommend!"</p>
            <h4>- Jane Smith</h4>
          </div>
          <div className="testimonial-card">
            <p>"Efficient, intuitive, and packed with features. Simply amazing!"</p>
            <h4>- Alex Johnson</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
