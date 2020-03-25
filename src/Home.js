import React, {useState} from "react";

function Home() {

  const [style, setStyle] = useState("");

  function rotateLeft() {
    setStyle("rotatate-left");
  }

  function handleAnimationEnd() {
    setStyle("");
  }

  return (
    <div className="container mt-5">
      <div className="container d-flex" >
        <img className={"col-xl-3 col-lg-4 col-md-5 col-sm-6 col-6 mx-auto " + style}
             src="/images/image.png" onAnimationEnd={handleAnimationEnd} alt="rleft">
        </img>
      </div>

      <div className="container mt-5">
        <div className="row d-flex justify-content-around">
          <button className="btn btn-outline-success" onClick={rotateLeft}>
            Rotate Left
          </button>

          <button className="btn btn-outline-success">Rotate Right</button>
        </div>
      </div>



    </div>
  )
}

export default Home;