import HeroImg from "../assets/images/hero-banner.png";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-content__subtitle">
            We Are Product Designer From UK
          </p>
          <h2 className="h2 hero-content__title">
            We Design Interfaces That Users Love
          </h2>
          <p className="hero-content__text">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus.
          </p>
          <button className="btn">Learn More</button>
        </div>

        <figure className="hero__banner">
          <img
            src={HeroImg}
            width="694"
            height="529"
            loading="lazy"
            alt="hero__banner"
            className="w-100 hero__banner__animation"
          />
        </figure>
      </div>
    </section>
  );
}
