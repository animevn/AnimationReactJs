import React, {useState} from "react";

function Home() {

  const [style, setStyle] = useState("");

  function handleAnimationEnd() {
    setStyle("");
  }

  function rotateLeft() {
    setStyle("rotatate-left");
  }

  function rotateRight() {
    setStyle("rotatate-right");
  }

  function fadeIn() {
    setStyle("fade-in");
  }

  function fadeOut() {
    setStyle("fade-out");
  }

  function fadeInOut() {
    setStyle("fade-in-out");
  }

  function zoomIn() {
    setStyle("zoom-in");
  }

  function zoomOut() {
    setStyle("zoom-out");
  }

  function leftIn() {
    setStyle("left-in");
  }

  function rightIn() {
    setStyle("right-in");
  }

  return (
    <div className="container mt-5 ">
      <div className="container d-flex overflow-hidden">
        <img className={"col-xl-3 col-lg-4 col-md-5 col-sm-6 col-6 mx-auto " + style}
             src="/images/image.png" onAnimationEnd={handleAnimationEnd} alt="rleft">
        </img>
      </div>

      <div className="container col-xl-6 col-lg-7 col-md-9 col-sm-11 col-11">

        <div className="container mt-5">
          <div className="row d-flex justify-content-around">
            <button className="btn btn-outline-success" onClick={rotateLeft}>
              Rotate Left
            </button>

            <button className="btn btn-outline-success" onClick={rotateRight}>
              Rotate Right
            </button>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row d-flex justify-content-around">
            <button className="btn btn-outline-success" onClick={fadeIn}>
              Fade In
            </button>

            <button className="btn btn-outline-success" onClick={fadeInOut}>
              Fade In Out
            </button>

            <button className="btn btn-outline-success" onClick={fadeOut}>
              Fade Out
            </button>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row d-flex justify-content-around">
            <button className="btn btn-outline-success" onClick={zoomIn}>
              Zoom In
            </button>

            <button className="btn btn-outline-success" onClick={zoomOut}>
              Zoom Out
            </button>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row d-flex justify-content-around">
            <button className="btn btn-outline-success" onClick={leftIn}>
              Left In
            </button>

            <button className="btn btn-outline-success" onClick={fadeInOut}>
              Top Bot
            </button>

            <button className="btn btn-outline-success" onClick={rightIn}>
              Right In
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home;