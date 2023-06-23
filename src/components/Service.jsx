import {
  Biotech,
  ChevronRight,
  DesktopWindowsOutlined,
  Public,
} from "@mui/icons-material";

export default function Service() {
  return (
    <section className="section service" id="services">
      <div className="container">
        <h2 className="h2 section-title underline">Our Speciallization</h2>

        <ul className="service__list">
          <li>
            <div className="service__card">
              <div className="card-icon">
                <Biotech
                  className="ion-icon"
                  name="telescope-outline"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </div>

              <h3 className="h3 title">Strategy & Research</h3>

              <p className="text">
                Mauris ut felis malesuada eros varius tristique a at orci. Nulla
                vulputate, leo sit amet rhoncus suscipit, enim ex venenatis
                ipsum, et porttitor.
              </p>

              <button className="card-btn" aria-label="Show More">
                <ChevronRight
                  className="ion-icon"
                  name="chevron-forward-outline"
                  fontSize="large"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </button>
            </div>
          </li>

          <li>
            <div className="service__card">
              <div className="card-icon">
                <DesktopWindowsOutlined
                  className="ion-icon"
                  name="desktop-outline"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </div>

              <h3 className="h3 title">Web Development</h3>

              <p className="text">
                Mauris ut felis malesuada eros varius tristique a at orci. Nulla
                vulputate, leo sit amet rhoncus suscipit, enim ex venenatis
                ipsum, et porttitor.
              </p>

              <button className="card-btn" aria-label="Show More">
                <ChevronRight
                  className="ion-icon"
                  name="chevron-forward-outline"
                  fontSize="large"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </button>
            </div>
          </li>

          <li>
            <div className="service__card">
              <div className="card-icon">
                <Public
                  className="ion-icon"
                  name="globe-outline"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </div>

              <h3 className="h3 title">Web Solution</h3>

              <p className="text">
                Mauris ut felis malesuada eros varius tristique a at orci. Nulla
                vulputate, leo sit amet rhoncus suscipit, enim ex venenatis
                ipsum, et porttitor.
              </p>

              <button className="card-btn" aria-label="Show More">
                <ChevronRight
                  className="ion-icon"
                  name="chevron-forward-outline"
                  fontSize="large"
                  sx={{ display: "block", pointerEvents: "none" }}
                />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
