import React from "react";

import "./TributePage.css";

const TributePage = () => {
  return (
    <div className="Tribute">
      <section className="Tribute__hero">
        <h1>Tribute to Brendan Eich</h1>
        <h2>The Creator of JavaScript</h2>
        <img
          src="/images/480px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg"
          alt=""
        />
        <p>
          Photo By Darcy Padilla -{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/3.0"
            title="Creative Commons Attribution-Share Alike 3.0"
          >
            CC BY-SA 3.0
          </a>,{" "}
          <a href="https://commons.wikimedia.org/w/index.php?curid=31783773">
            Link
          </a>
        </p>
      </section>
      <section className="Tribute__content">
        <p>
          <strong>Brendan Eich</strong> (/ˈaɪk/; born July 4, 1961) is an
          American technologist and creator of the JavaScript programming
          language. He co-founded the Mozilla project, the Mozilla Foundation
          and the Mozilla Corporation, and served as the Mozilla Corporation's
          chief technical officer and briefly its chief executive officer.He is
          the CEO of Brave Software.
        </p>
        <p>
          You can read more about him on{" "}
          <a href="https://en.wikipedia.org/wiki/Brendan_Eich">Wikipedia</a>.
        </p>
      </section>
    </div>
  );
};

export default TributePage;
