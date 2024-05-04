import React from "react";
import "./card.css";
function Card() {

  function openImageFullScreen(imageUrl) {
    window.open(imageUrl, "_blank");
  }

  return (
    <div style={{margin:"auto"}}>
      <div className="card1" >
      
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
            alt="Card image cap"
            onClick={() =>
              openImageFullScreen(
                "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              )
            }
          />
          <div className="card-body">
            <p className="card-text">The Galactic Time Travelers.</p>
            <a href="#" className="btn btn-primary">
              new
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
            alt="Card image cap"
            onClick={() =>
              openImageFullScreen(
                "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              )
            }
          />
          <div className="card-body">
            <p className="card-text">The Galactic Time Travelers.</p>
            <a href="#" style={{color:"yellow"}} className="btn btn-primary">
              In Progress
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
            alt="Card image cap"
            onClick={() =>
              openImageFullScreen(
                "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              )
            }
          />
          <div className="card-body">
            <p className="card-text">The Galactic Time Travelers.</p>
            <a  style={{color:"green"}} href="#" className="btn btn-primary">
             Completed
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
            alt="Card image cap"
            onClick={() =>
              openImageFullScreen(
                "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              )
            }
          />
          <div className="card-body">
            <p className="card-text">The Galactic Time Travelers.</p>
            <a style={{color:"green"}}href="#" className="btn btn-primary">
             Completed
            </a>
          </div>
        </div>
      </div>
      <div className="card1" >
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
            alt="Card image cap"
            onClick={() =>
              openImageFullScreen(
                "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              )
            }
          />
          <div className="card-body">
            <p className="card-text">The Galactic Time Travelers.</p>
            <a href="#" className="btn btn-primary">
            Completed
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
            alt="Card image cap"
            onClick={() =>
              openImageFullScreen(
                "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              )
            }
          />
          <div className="card-body">
            <p className="card-text">The Galactic Time Travelers.</p>
            <a style={{color:"yellow"}} href="#" className="btn btn-primary">
            In Progress
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
            alt="Card image cap"
            onClick={() =>
              openImageFullScreen(
                "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              )
            }
          />
          <div className="card-body">
            <p className="card-text">The Galactic Time Travelers.</p>
            <a style={{color:"green"}} href="#" className="btn btn-primary">
            Completed
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
            alt="Card image cap"
            onClick={() =>
              openImageFullScreen(
                "https://ik.imagekit.io/dev24/$%7Bdata?.Image%7D"
              )
            }
          />
          <div className="card-body">
            <p className="card-text">The Galactic Time Travelers.</p>
            <a style={{color:"green"}} href="#" className="btn btn-primary">
            Completed
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
