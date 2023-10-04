import Card from "../components/Card";
import Icon1 from "../../styles/icon_1.svg";
import Icon2 from "../../styles/icon_2.svg";
import Icon3 from "../../styles/icon_3.svg";
import ProfileImage from "../../styles/image.svg";
import MalikImage from "../../styles/malik.svg";
import ContactImage from "../../styles/image1.svg";

function HomePage() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6 intro">
                <h2>YOUR HAIR IS OUR CANVAS</h2>
                <p>We see "YOU" and we create the look that matches your personality best</p>
                <button type="button" class="btn btn-primary btn-lg">Book Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container card-conatiner service mt-5">
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
      <div className="container card-conatiner  mt-5">
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 image">
            <img src={ProfileImage} className="img-fluid"></img>
          </div>
          <div className="col-md-6 about d-flex">
            <h2>Shantell</h2>
            <h3>Braider/ Hair Stylist</h3>
            <p>Shantell is an African hairstylist in Berlin, known for blending African hair traditions with modern flair. </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 about d-flex">
            <h2>MALIK DE LA CRUZ</h2>
            <h3>Barber</h3>
            <p>Malik,a Brazilian-born male hairstylist in Berlin, is known for his innovative and gender-inclusive approach to hairstyling.</p>
          </div>
          <div className="col-md-6 image">
            <img src={MalikImage} className="img-fluid"></img>
          </div>
        </div>
      </div>
      <div className="container mt-5 price">
        <div className="row">
          <div className="col-md-4 d-flex schedule-title">
            <h2>Price List</h2>
          </div>
          <div className="col-md-8 ">
            <p>Braids  150€</p>
            <p>FULANI BRAIDS/ WIG INSTALLATION/ WEAVE  80€</p>
            <p>CROTCHET/ CORNROWS  50€</p>
            <p>TWIST 100€</p>
            <p>LOCS 130€</p>
            <p>SPECIAL OCCASIONS MAKE-UP 120€</p>
            <p>FULL FACE MAKE-UP 60€</p>
            <p>THREADING 12€</p>
          </div>
        </div>
      </div>
      <div className="container banner mt-5">
        <div className="row">
          <div className="col-md-6 banner-image">
            <img src={ContactImage} className="img-fluid" alt="Banner Image" />
          </div>
          <div className="col-md-6 banner-text">
            <h2>Beautiful Hair</h2>
          </div>
        </div>
      </div>
      <form action="/contct">form</form>
    </div>
  );
}
export default HomePage;
