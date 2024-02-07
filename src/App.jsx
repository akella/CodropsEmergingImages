import "./App.css";
import { addEffect } from "@react-three/fiber";
import Lenis from "@studio-freight/lenis";
import EmergingImage from "./components/EmergingImage";
import Scene from "./Scene";
import { useState } from "react";
import { useEffect } from "react";

const lenis = new Lenis();
addEffect((t) => lenis.raf(t));

function App() {
  const [type, setType] = useState(0);

  useEffect(() => {
    const nav = [...document.querySelectorAll(".frame__demos-item")];
    nav.forEach((el) => el.classList.remove("is-active"));
    nav[type].classList.add("is-active");
  }, [type]);

  return (
    <>
      <Scene />
      <main>
        <div className="frame">
          <h1 className="frame__title">Revealing <br/>WebGL Images</h1>
          <a className="frame__back" href="https://tympanus.net/codrops/?p=75561">
            Back to the article
          </a>
          <a className="frame__prev" href="https://tympanus.net/Development/StickySections/">
            Previous demo
          </a>
          <nav className="frame__demos">
            <span className="frame__demos-title">Variations </span>
            <a
              className="frame__demos-item is-active"
              onClick={() => setType(0)}
            >
              1
            </a>
            <a className="frame__demos-item" onClick={() => setType(1)}>
              2
            </a>
            <a className="frame__demos-item" onClick={() => setType(2)}>
              3
            </a>
            <a className="frame__demos-item" onClick={() => setType(3)}>
              4
            </a>
            <a className="frame__demos-item" onClick={() => setType(4)}>
              5
            </a>
          </nav>
        </div>
        <div className="grid">
          <figure
            className="grid__item"
            style={{ "--r": 1, "--c": 1, "--s": 4 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="./img/1.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Embrace of Heat</h3> <span>2023</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 2, "--c": 5, "--s": 3 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="./img/2.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Silence in Sand</h3> <span>2022</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 3, "--c": 3, "--s": 2 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="./img/3.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Whispers of Earth</h3> <span>2024</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 4, "--c": 1, "--s": 2 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="./img/4.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Mirage in Time</h3> <span>2021</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 5, "--c": 3, "--s": 5 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="./img/5.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Veiled in Gold</h3> <span>2023</span>
            </figcaption>
          </figure>
          <figure className="grid__item" style={{ "--r": 6, "--c": 2 }}>
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="./img/6.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Ancient Sands Speak</h3> <span>2022</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 7, "--c": 3, "--s": 3 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="./img/7.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Dreams of Dust</h3> <span>2024</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 8, "--c": 6, "--s": 2 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="./img/8.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Gilded Sands Sing</h3> <span>2021</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 9, "--c": 1, "--s": 5 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="./img/9.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Mirrored Illusions Fade</h3> <span>2023</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 10, "--c": 6, "--s": 3 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="./img/10.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Ripples in Time</h3> <span>2022</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 11, "--c": 4, "--s": 2 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="./img/11.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Essence of Silence</h3> <span>2024</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 12, "--c": 1, "--s": 3 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="./img/12.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Luxury in Lines</h3> <span>2021</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 13, "--c": 4, "--s": 5 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="./img/13.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Escape in Shadows</h3> <span>2023</span>
            </figcaption>
          </figure>
        </div>
        <section className="outro">
          <h2 className="outro__title">More you might like</h2>
          <div className="card-wrap">
            <div className="card">
              <a
                href="http://tympanus.net/Development/GridToSlider/"
                className="card__image"
                style={{
                  backgroundImage:
                    "url(https://tympanus.net/codrops/wp-content/uploads/2023/05/gridtoslider_feat.jpg",
                }}
              ></a>
              <h3 className="card__title">
                <a href="http://tympanus.net/Development/GridToSlider/">
                  Grid to Slideshow Switch Animations
                </a>
              </h3>
            </div>
            <div className="card">
              <a
                href="https://tympanus.net/Development/GridFlowEffect/"
                className="card__image"
                style={{
                  backgroundImage:
                    "url(https://tympanus.net/codrops/wp-content/uploads/2023/07/gridflow_featured-1.jpg",
                }}
              ></a>
              <h3 className="card__title">
                <a href="http://tympanus.net/Development/GridFlowEffect/">
                  Grid Flow Animation
                </a>
              </h3>
            </div>
          </div>
        </section>
        <p className="credits">
          Made by <a href="https://twitter.com/akella">@akella</a> for <a href="https://twitter.com/codrops">@codrops</a>
        </p>
      </main>
    </>
  );
}

export default App;
