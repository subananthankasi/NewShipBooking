import React from "react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaYacht, FaClock } from 'react-icons/fa';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { GiSpeedBoat } from "react-icons/gi";
import "./Contact.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const containerStyle = {
    width: "100%",
    height: "500px", 
  };

  const center = {
    lat: 25.1193271, 
    lng: 55.13174015,
  };

  const mapStyles = [
    {
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }],
    },
    {
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ color: "#616161" }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ color: "#f5f5f5" }],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#bdbdbd" }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#eeeeee" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [{ color: "#757575" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#dadada" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#c9c9c9" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9e9e9e" }],
    },
  ];

  return (
    <div className="">
      <div className="contact-hero position-relative">
        <button
          onClick={() => navigate("/")}
          className="back-btn position-absolute"
          // style={{
          //   top: "20px",
          //   left: "20px",
          //   zIndex: 10,
          //   background: "#fff",
          //   border: "1px solid #ccc",
          //   borderRadius: "8px",
          //   padding: "8px 16px",
          //   fontWeight: "bold",
          //   cursor: "pointer",
          // }}
        >
          ← Back
        </button>
        <h1>CONTACT US</h1>
        <p>Experience luxury yachting in Dubai with our premium fleet</p>
       
      </div>

      <div className="container ">
        <div className="row mt-3 mb-3">
          <div className=" col-12 col-lg-6 col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28899.870956793926!2d55.13174015!3d25.1193271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1529c2653b15%3A0x3dcabcae764a3e16!2sPalm%20Jumeirah!5e0!3m2!1sen!2sin!4v1750764372522!5m2!1sen!2sin"
              width="100%"
              // height="450"
              style={{ border: 0 ,height:"100%"}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                options={{
                  styles: mapStyles,
                  disableDefaultUI: false,
                  scrollwheel: true,
                }}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript> */}
          </div>
          <div className=" col-12 col-lg-6 col-md-6">
            <div className="contact-card">
              <h2>GET IN TOUCH</h2>
              <p className="contact-intro">
                Our team is ready to assist you with all your luxury yacht
                booking needs in Dubai.
              </p>

              <div className="contact-info">
                <div className="info-item">
                  <FaMapMarkerAlt className="icon" />
                  <div>
                    <h4>OUR LOCATION</h4>
                    <p>
                      Dubai Harbour, Dubai International Marine Club, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <FaPhone className="icon" />
                  <div>
                    <h4>PHONE NUMBER</h4>
                    <p>+971 52 564 4209</p>
                    <p>+971 52 564 4209 (24/7)</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaEnvelope className="icon" />
                  <div>
                    <h4>EMAIL ADDRESS</h4>
                    {/* <p>bookings@luxurydubaiyachts.ae</p> */}
                    <p>titanyachtsofficial@gmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaClock className="icon" />
                  <div>
                    <h4>WORKING HOURS</h4>
                    <p>Monday - Sunday: 9:00 AM - 10:00 PM</p>
                    <p>24/7 Emergency Booking Available</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a   href="https://instagram.com/titan_yachts_official" className="social-icon">
                  Instagram
                </a>
                <a  href="https://www.facebook.com/titanyachtsofficial" className="social-icon">
                  Facebook
                </a>
                <a  href="https://wa.me/+971525644209" className="social-icon">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <h2>ENQUIRE ABOUT OUR YACHTS</h2>
        <form className="premium-contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input type="text" id="name" placeholder="Enter your full name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input type="date" id="date" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="yacht">Yacht Preference</label>
            <select id="yacht">
              <option value="">Select a yacht</option>
              <option value="luxury">Luxury Yacht (Up to 20 guests)</option>
              <option value="mega">Mega Yacht (Up to 50 guests)</option>
              <option value="super">Super Yacht (Up to 100 guests)</option>
              <option value="custom">Custom Request</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message*</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tell us about your yacht booking requirements"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            SEND ENQUIRY
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
