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
    nav[type + 1].classList.add("is-active");
  }, [type]);

  return (
    <>
      <Scene />
      <main>
        <div className="frame">
          <h1 className="frame__title">Emerging Images</h1>
          <a className="frame__back" href="https://tympanus.net/codrops/?p=">
            Back to the article
          </a>
          <a className="frame__prev" href="https://tympanus.net/Development/">
            Previous demo
          </a>
          <nav className="frame__demos">
            <span className="frame__demos-item">Variations </span>
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
                url="/img/1.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Warm Oasis Retreat</h3> <span>2023</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 2, "--c": 5, "--s": 3 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="/img/2.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Desert Serenity Suites</h3> <span>2022</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 3, "--c": 3, "--s": 2 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="/img/3.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Sandscape Elegance</h3> <span>2024</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 4, "--c": 1, "--s": 2 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="/img/4.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Dune Mirage Retreat</h3> <span>2021</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 5, "--c": 3, "--s": 5 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="/img/5.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Sahara Luxury Oasis</h3> <span>2023</span>
            </figcaption>
          </figure>
          <figure className="grid__item" style={{ "--r": 6, "--c": 2 }}>
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="/img/6.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Arabian Haven</h3> <span>2022</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 7, "--c": 3, "--s": 3 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="/img/7.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Desert Dreamscape Lodges</h3> <span>2024</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 8, "--c": 6, "--s": 2 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="/img/8.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Golden Sands Interiors</h3> <span>2021</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 9, "--c": 1, "--s": 5 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="/img/9.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Desert Mirage Suites</h3> <span>2023</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 10, "--c": 6, "--s": 3 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="/img/10.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Oasis Tranquility</h3> <span>2022</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 11, "--c": 4, "--s": 2 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="/img/11.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Desert Zen Retreat</h3> <span>2024</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 12, "--c": 1, "--s": 3 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="/img/12.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Sandscape Luxury</h3> <span>2021</span>
            </figcaption>
          </figure>
          <figure
            className="grid__item"
            style={{ "--r": 13, "--c": 4, "--s": 5 }}
          >
            <div className="grid__item-img">
              <EmergingImage
                type={type}
                url="/img/13.jpg"
                className="grid__item-img-inner"
              />
            </div>
            <figcaption className="grid__item-caption">
              <h3>Desert Elegance Escapes</h3> <span>2023</span>
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
          Made by <a href="https://twitter.com/codrops">@codrops</a>
        </p>
      </main>
    </>
  );
}

export default App;
