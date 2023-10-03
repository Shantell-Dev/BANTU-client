import Card from "../components/Card";
import Icon1 from "../../styles/icon_1.svg";
import Icon2 from "../../styles/icon_2.svg";
import Icon3 from "../../styles/icon_3.svg";
import ProfileImage from "../../styles/image.svg";
import MalikImage from "../../styles/malik.svg";

function HomePage() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6 intro">
                <h2>YOUR HAIR IS OUR CANVAS</h2>
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
              title="Card 1"
              description="Description for Card 1."
            />
          </div>
          <div className="col-md-4">
            <Card
              imageSrc={Icon2}
              title="Card 1"
              description="Description for Card 2."
            />
          </div>
          <div className="col-md-4">
            <Card
              imageSrc={Icon3}
              title="Card 1"
              description="Description for Card 3."
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
            <h3>Braider</h3>
            <p>something about shantell</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 about d-flex">
            <h2>MALIK DE LA CRUZ</h2>
            <h3>Barber</h3>
            <p>something about shantell</p>
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
            <p>something about shantell</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
