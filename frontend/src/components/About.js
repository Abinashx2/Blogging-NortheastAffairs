import React from 'react';
import './Styles/About.css';

const About = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        {/* Header Section */}
        <div className="about-header">
          <h2>About Bodoland Times</h2>
          <p className="subtitle">Your Trusted Source for News Since 2023</p>
          <div className="divider"></div>
        </div>

        {/* Mission Section */}
        <div className="mission-section">
          <div className="mission-text">
            <h3>Our Mission</h3>
            <p>
              At Bodoland Times, we are committed to delivering accurate, unbiased, and timely news 
              that matters to the people of Bodoland and beyond. Our team of dedicated journalists 
              works around the clock to bring you stories that inform, educate, and inspire.
            </p>
          </div>
          <div className="mission-image">
            <img 
              src="/images/about-mission.jpg" 
              alt="Our newsroom team working" 
              className="responsive-image"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✓</div>
              <h4>Accuracy</h4>
              <p>We verify every fact before publication</p>
            </div>
            <div className="value-card">
              <div className="value-icon">♯</div>
              <h4>Integrity</h4>
              <p>We maintain strict editorial independence</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⊕</div>
              <h4>Community</h4>
              <p>We amplify local voices and stories</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h3>Meet Our Editorial Team</h3>
          <div className="team-grid">
            <div className="team-member">
              <img 
                src="/images/team/editor.jpg" 
                alt="Editor in Chief" 
                className="team-photo"
              />
              <h4>John Narzary</h4>
              <p>Editor-in-Chief</p>
              <p className="bio">20+ years in journalism</p>
            </div>
            <div className="team-member">
              <img 
                src="/images/team/reporter1.jpg" 
                alt="Senior Reporter" 
                className="team-photo"
              />
              <h4>Priya Basumatary</h4>
              <p>Senior Political Reporter</p>
              <p className="bio">Specializing in regional politics</p>
            </div>
            <div className="team-member">
              <img 
                src="/images/team/reporter2.jpg" 
                alt="Culture Reporter" 
                className="team-photo"
              />
              <h4>Arjun Boro</h4>
              <p>Culture & Arts Editor</p>
              <p className="bio">Preserving Bodoland heritage</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="contact-cta">
          <h3>Have a Story Tip or Feedback?</h3>
          <p>We value your input. Reach out to our team at:</p>
          <div className="contact-info">
            <p>✉️ editor@bodolandtimes.com</p>
            <p>📞 +91 123 456 7890</p>
          </div>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default About;