import React, { useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Icon1 from "../../styles/icon_1.svg";
import Icon2 from "../../styles/icon_2.svg";
import Icon3 from "../../styles/icon_3.svg";
import ProfileImage from "../../styles/image.svg";
import MalikImage from "../../styles/malik.svg";
import ContactImage from "../../styles/image1.svg";
import { Link } from "react-router-dom";

function HomePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5005/send-email", formData)
      .then((response) => {
        if (response.data.success) {
          console.log("Email sent successfully");
        } else {
          console.error("Failed to send email");
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="home">
      <div className="home-container">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6 intro">
                <h2>YOUR HAIR IS OUR CANVAS</h2>
                <p>
                  We see "YOU" and we create the look that matches your
                  personality best
                </p>
                <Link to="/appointment" className="nav-link">
                  <button type="button" className="btn btn-outline-danger">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" service p-2">
        <div className="row">
          <div className="col-md-4">
            <Card
              imageSrc={Icon1}
              title="PERSONALISED EXPERIENCE"
              description="Each guest is our favourite guest.Come and experience our exceptional service, were you are treated like royalty."
            />
          </div>
          <div className="col-md-4">
            <Card
              imageSrc={Icon2}
              title="PROFESSIONAL CARE"
              description="Our products are made especial for textured hair and are all natural products to insure the best healthy hair and result ."
            />
          </div>
          <div className="col-md-4">
            <Card
              imageSrc={Icon3}
              title="WE CARE ABOUT WHAT WE DO"
              description="Hairstylists that you'll meet in our studio are doing what they love and are extremly passionate about kosmetics in general.They will leave you feeling confident about yourself."
            />
          </div>
        </div>
      </div>
      <div className="container p-2">
        <div className="row">
          <div className="col-md-6 schedule-title">
            <h3>Opening Hours</h3>
          </div>
          <div className="col-md-6 schedule-times">
            <p>MONDAY TO FRIDAY / 11:00 - 20:00</p>
            <p>SATURDAY / 10:00 - 18:00</p>
            <p>SUNDAY / CLOSED</p>
          </div>
        </div>
      </div>
      <div className=" container-fluid stylists">
        <div className="container  mt-5">
          <div className="row p-md-0 m-md-0">
            <div className="col-md-6 image">
              <img src={ProfileImage} className="img-fluid"></img>
            </div>
            <div className="col-md-6 about d-flex">
              <h2>Shantell</h2>
              <h3>Braider/ Hair Stylist</h3>
              <p>
                Shantell is an African hairstylist in Berlin, known for blending
                African hair traditions with modern flair.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row p-md-0 m-md-0">
            <div className="col-md-6 about d-flex">
              <h2>MALIK DE LA CRUZ</h2>
              <h3>Barber</h3>
              <p>
                Malik,a Brazilian-born male hairstylist in Berlin, is known for
                his innovative and gender-inclusive approach to hairstyling.
              </p>
            </div>
            <div className="col-md-6 image">
              <img src={MalikImage} className="img-fluid"></img>
            </div>
          </div>
        </div>
        <div className=" price mt-3">
          <div className="row p-md-0 m-md-0">
            <div className="col-md-4 d-flex schedule-title">
              <h2>Price List</h2>
            </div>
            <div className="col-md-8 ">
              <p>Braids 150€</p>
              <p>FULANI BRAIDS/ WIG INSTALLATION/ WEAVE 80€</p>
              <p>CROTCHET/ CORNROWS 50€</p>
              <p>TWIST 100€</p>
              <p>LOCS 130€</p>
              <p>SPECIAL OCCASIONS MAKE-UP 120€</p>
              <p>FULL FACE MAKE-UP 60€</p>
              <p>THREADING 12€</p>
            </div>
          </div>
        </div>
        <div className="row p-md-0 m-md-0">
          <div className={`col-md-6 p-md-0 m-md-0 image`}>
            <img src={ContactImage} className="img-fluid" alt="Banner Image" />
          </div>
          <div
            className={`col-md-6 about d-flex align-items-center justify-content-center`}
          >
            <form onSubmit={handleSubmit}>
              <div
                className={`d-flex align-items-center justify-content-center`}
              >
                <div className="form-group">
                  <label className="text-left" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    value={formData.firstName}
                  /*  onChange={handleChange} */
                    type="text"
                    className="form-control border-bottom"
                    id="firstName"
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="form-group">
                  <label className="text-left" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    className="form-control border-bottom"
                    id="lastName"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div
                className={`d-flex align-items-center justify-content-center`}
              >
                <div className="form-group">
                  <label className="text-left" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    value={formData.phone}
                    onChange={handleChange}
                    type="text"
                    className="form-control border-bottom"
                    id="phone"
                    placeholder="Enter Phone"
                  />
                </div>
                <div className="form-group">
                  <label className="text-left" htmlFor="email">
                    Email
                  </label>
                  <input
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="form-control border-bottom"
                    id="email"
                    placeholder="Enter Email"
                  />
                </div>
              </div>

              <fieldset className="border-bottom">
                <label className="text-left" htmlFor="phone">
                  Message
                </label>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>
              </fieldset>

              <button type="button" className="btn btn-outline-danger">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
