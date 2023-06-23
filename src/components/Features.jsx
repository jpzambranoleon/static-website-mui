import FeaturesBanner from "../assets/images/feautres-banner.png";
import {
  CodeOutlined,
  EmojiObjectsOutlined,
  PaletteOutlined,
  RocketLaunchOutlined,
} from "@mui/icons-material";

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <h2 className="h2 section-title underline">Our Features</h2>

        <ul className="features-list">
          <li>
            <div className="features-card">
              <div className="icon">
                <EmojiObjectsOutlined
                  className="ion-icon"
                  name="bulb-outline"
                  sx={{
                    display: "block",
                    pointerEvents: "none",
                  }}
                />
              </div>

              <div className="content">
                <h3 className="h3 title">Idea & Analysis</h3>

                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="features-card">
              <div className="icon">
                <PaletteOutlined
                  className="ion-icon"
                  name="color-palette-outline"
                  sx={{
                    display: "block",
                    pointerEvents: "none",
                  }}
                />
              </div>

              <div className="content">
                <h3 className="h3 title">Designing</h3>

                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>
        </ul>

        <figure className="features-banner">
          <img
            src={FeaturesBanner}
            width="369"
            height="318"
            loading="lazy"
            alt="Features Banner"
            className="w-100 banner-animation"
          />
        </figure>

        <ul className="features-list">
          <li>
            <div className="features-card">
              <div className="icon">
                <CodeOutlined
                  className="ion-icon"
                  name="code-slash-outline"
                  sx={{
                    display: "block",
                    pointerEvents: "none",
                  }}
                />
              </div>

              <div className="content">
                <h3 className="h3 title">Development</h3>

                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="features-card">
              <div className="icon">
                <RocketLaunchOutlined
                  className="ion-icon"
                  name="rocket-outline"
                  sx={{
                    display: "block",
                    pointerEvents: "none",
                  }}
                />
              </div>

              <div className="content">
                <h3 className="h3 title">Testing & Lunching</h3>

                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et
                  eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
