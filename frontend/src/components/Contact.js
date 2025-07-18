import React from 'react';
import './Styles/Contact.css';

const ContactDetails = () => {
  return (
    <section className="contact-details">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>Contact Bodoland Times</h2>
          <p className="subtitle">Reach our editorial and advertising teams</p>
          <div className="divider"></div>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-grid">
          {/* Editorial Contacts */}
          <div className="contact-card">
            <div className="card-header editorial">
              <h3>Editorial Desk</h3>
              <p>For news tips and story submissions</p>
            </div>
            <div className="card-body">
              <div className="contact-item">
                <span className="icon email-icon"></span>
                <div>
                  <span className="label">Email:</span>
                  <a href="mailto:editor@bodolandtimes.com">editor@bodolandtimes.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon phone-icon"></span>
                <div>
                  <span className="label">Phone:</span>
                  <a href="tel:+917001234567">+91 700 123 4567</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon clock-icon"></span>
                <div>
                  <span className="label">Hours:</span>
                  <span>7 AM - 7 PM (Mon-Sat)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Advertising Contacts */}
          <div className="contact-card">
            <div className="card-header advertising">
              <h3>Advertising</h3>
              <p>For partnership and sponsorship</p>
            </div>
            <div className="card-body">
              <div className="contact-item">
                <span className="icon email-icon"></span>
                <div>
                  <span className="label">Email:</span>
                  <a href="mailto:ads@bodolandtimes.com">ads@bodolandtimes.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon phone-icon"></span>
                <div>
                  <span className="label">Phone:</span>
                  <a href="tel:+916009876543">+91 600 987 6543</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon clock-icon"></span>
                <div>
                  <span className="label">Hours:</span>
                  <span>9 AM - 5 PM (Mon-Fri)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div className="contact-card">
            <div className="card-header office">
              <h3>Registered Office</h3>
              <p>Visit our headquarters</p>
            </div>
            <div className="card-body">
              <div className="contact-item">
                <span className="icon map-icon"></span>
                <div>
                  <span className="label">Address:</span>
                  <address>
                    Bodoland Times Media House<br />
                    123 Press Avenue, Kokrajhar<br />
                    Bodoland Territorial Region<br />
                    Assam - 783370, India
                  </address>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon document-icon"></span>
                <div>
                  <span className="label">RNI No:</span>
                  <span>ASSBIL/2023/12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="social-media">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/bodolandtimes" target="_blank" rel="noopener noreferrer">
              <span className="social-icon facebook-icon"></span>
            </a>
            <a href="https://twitter.com/bodolandtimes" target="_blank" rel="noopener noreferrer">
              <span className="social-icon twitter-icon"></span>
            </a>
            <a href="https://instagram.com/bodolandtimes" target="_blank" rel="noopener noreferrer">
              <span className="social-icon instagram-icon"></span>
            </a>
            <a href="https://youtube.com/bodolandtimes" target="_blank" rel="noopener noreferrer">
              <span className="social-icon youtube-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;