import JpCeo from "../assets/images/jpzl.jpg";
import ZurabCio from "../assets/images/zurab.jpg";
import ShaneCfo from "../assets/images/shane.jpg";
import AlbertCfo from "../assets/images/albert.jpg";

export default function Team() {
  const teamPpl = [
    { img: JpCeo, name: "Jean-Paul Zambrano-Leon", job: "CEO" },
    { img: ZurabCio, name: "Zura Sabakhtarishvili", job: "CIO" },
    { img: ShaneCfo, name: "Shane Smith", job: "CFO" },
    { img: AlbertCfo, name: "Albert Zhang", job: "CFO" },
  ];

  return (
    <>
      <section className="team">
        <div className="container">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
