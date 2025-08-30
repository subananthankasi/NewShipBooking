import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./AboutUs.css";
import img from "../../Assets/smallbanner.png";
import { useNavigate } from "react-router-dom";

const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <div className="about-us-page">
      <section className="about-hero">
        <Container>
          <div style={{ position: "relative" }} className="d-block d-lg-none">
            <button
              onClick={() => navigate("/")}
              className="  position-absolute"
              style={{
                top: "-115px",
                left: "0px",
                zIndex: 10,
                background: "#fff",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "8px 16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ← 
            </button>
          </div>

          <h1 className="text-white">About Luxury Yacht Dubai</h1>
          <p className="lead text-white">
            Your premier yacht charter experience in the heart of the UAE
          </p>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="section-title">Our Story</h2>
              <p className="lead">
                Founded in 2010, Luxury Yacht Dubai began with a single vision:
                to provide unparalleled yacht experiences in one of the world's
                most glamorous destinations.
              </p>
              <p>
                What started as a small fleet of luxury yachts has grown into
                Dubai's most trusted yacht charter service, serving thousands of
                satisfied clients including celebrities, business leaders, and
                discerning travelers from around the globe.
              </p>
            </Col>
            <Col md={6}>
              <img
                src={img}
                alt="Our first yacht in Dubai Marina"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Why Choose Luxury Yacht Dubai</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-anchor fa-3x"></i>
                  </div>
                  <h4>Premium Fleet</h4>
                  <p>
                    We maintain the newest and most luxurious yachts in Dubai,
                    with rigorous safety and maintenance standards.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-user-tie fa-3x"></i>
                  </div>
                  <h4>Expert Crew</h4>
                  <p>
                    Our professional captains and crew are hand-picked for their
                    expertise and dedication to exceptional service.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-map-marked-alt fa-3x"></i>
                  </div>
                  <h4>Exclusive Routes</h4>
                  <p>
                    We offer access to Dubai's most spectacular sights and
                    hidden gems only accessible by yacht.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Meet Our Team</h2>
          <Row>
            <Col md={3} className="mb-4">
              <Card className="team-card">
                <Card.Img variant="top" src="/images/team-ceo.jpg" />
                <Card.Body>
                  <h5>Ahmed Al-Maktoum</h5>
                  <p className="text-muted">Founder & CEO</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="team-card">
                <Card.Img variant="top" src="/images/team-operations.jpg" />
                <Card.Body>
                  <h5>Sarah Johnson</h5>
                  <p className="text-muted">Director of Operations</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="team-card">
                <Card.Img variant="top" src="/images/team-captain.jpg" />
                <Card.Body>
                  <h5>Captain Rajesh Kumar</h5>
                  <p className="text-muted">Head Captain</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} className="mb-4">
              <Card className="team-card">
                <Card.Img variant="top" src="/images/team-events.jpg" />
                <Card.Body>
                  <h5>Layla Hassan</h5>
                  <p className="text-muted">Events Coordinator</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="py-5 bg-dark text-white">
        <Container>
          <h2 className="text-center mb-5">What Our Clients Say</h2>
          <Row>
            <Col md={4} className="mb-4">
              <blockquote className="testimonial">
                <p>
                  "The sunset cruise was absolutely magical. The crew went above
                  and beyond to make our anniversary special."
                </p>
                <footer className="blockquote-footer text-white">
                  Sheikh Khalid, <cite>Abu Dhabi</cite>
                </footer>
              </blockquote>
            </Col>
            <Col md={4} className="mb-4">
              <blockquote className="testimonial">
                <p>
                  "Perfect for our corporate event. The yacht was immaculate and
                  the service was five-star quality."
                </p>
                <footer className="blockquote-footer text-white">
                  Emma Wilson, <cite>London</cite>
                </footer>
              </blockquote>
            </Col>
            <Col md={4} className="mb-4">
              <blockquote className="testimonial">
                <p>
                  "Best way to see Dubai! We booked a private tour and it was
                  worth every dirham. Will definitely return!"
                </p>
                <footer className="blockquote-footer text-white">
                  The Chen Family, <cite>Shanghai</cite>
                </footer>
              </blockquote>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-primary text-white">
        <Container className="text-center">
          <h2>Ready for Your Luxury Yacht Experience?</h2>
          <p className="lead mb-4">
            Contact us today to book your unforgettable journey through Dubai's
            stunning waters.
          </p>
          <a  href="https://wa.me/+971525644209" className="btn btn-light btn-lg">Book Now</a>
        </Container>
      </section>
    </div>
  );
};

export default Aboutus;
