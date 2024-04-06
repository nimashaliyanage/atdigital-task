import Hero from "../Assets/Hero Image.png";
import "../Components/Home.css";

function Home() {
  return (
    <div>
      <figure className="position-relative">
        <img src={Hero} alt="hero" className="img-fluid" width="100%" />
        <figcaption>
          <h1>
            We crushe your competitors, goals, and sales records - without the
            B.S.
          </h1>
          <br />
          <button>GET FREE CONSULTASTION</button>
          <br />
          <br />
        </figcaption>
      </figure>
    </div>
  );
}

export default Home;
