import hero from "../assets/hero.png";
import lavande from "../assets/lavande.jpg";
import primavera from "../assets/primavera.jpg";
import spezia from "../assets/spezia.jpg";
import hand from "../assets/hand.jpg";
import black from "../assets/black.avif";
import strip from "../assets/strip.png";
import veloce from "../assets/veloce.png";
import logoh from "../assets/logoh.png";
import image from "../assets/image.png";

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="header">
        <div className="header-top">
          <img src={logoh} alt="logo" className="logo" />

          <div className="header-right">
            <p className="tagline">
              THE ZERO-PROOF APERITIF FOR MODERN LIVING.
            </p>
            <hr className="header-line" /> {/* <-- yeh line add ki */}
            <nav className="nav">
              <a href="#about">ABOUT</a>
              <a href="#find">FIND STOCKISTS</a>
              <a href="#contact">CONTACT</a>
            </nav>
          </div>
        </div>
      </header>
      <img src={strip} alt="divider" className="strip-img" />

      {/* CHECKER STRIP */}
      {/* <div className="checker"></div> */}

      {/* HERO BLOCK */}
      <section className="hero">
        <div className="hero-left">
          <h2>
            THE ONLY SPIRIT-FREE APERITIF THAT TASTES AS GOOD AS IT MAKES YOU
            FEEL.
          </h2>
          <button>SHOP NOW</button>
        </div>

        <div className="hero-right">
          <img src={image} alt="hero" />
        </div>
      </section>

      {/* ABOUT TEXT */}
      <section className="about" id="about">
        <h2>
          VÉLOCE IS THE ZERO-PROOF APERITIF FOR MODERN LIVING, CRAFTED WITH
          SUPER HERBS AND NUTRACEUTICALS TO ELEVATE YOUR WELL-BEING, WITHOUT
          COMPROMISING THE SOPHISTICATED RITUAL OF THE APERITIF.
        </h2>

        <button className="outline">ABOUT US</button>
      </section>

      {/* PRIMAVERA BLACK SECTION */}
      <section className="featured">
  <div className="featured-wrapper">
    <img src={black} alt="primavera" />

    <h2 className="featured-title">PRIMAVERA</h2>

    <p className="featured-desc">
      A BOLD, SPICED APERITIF FEATURING CARDAMOM, GINGER, AND CINNAMON.
    </p>
  </div>
</section>

      {/* PRODUCT GRID */}

      <section className="products">
        <div className="products-grid">
          <div className="product-card">
            <h3>LAVANDE</h3>
            <img src={lavande} alt="Lavande" />
            <p>
              A delicate and floral aperitif with notes of lavender and
              chamomile.
            </p>
            <span>FIND NEAR YOU</span>
          </div>

          <div className="product-card">
            <h3>PRIMAVERA</h3>
            <img src={primavera} alt="Primavera" />
            <p>A refreshing and vibrant aperitif with bright citrus notes.</p>
            <span>FIND NEAR YOU</span>
          </div>

          <div className="product-card">
            <h3>SPEZIA</h3>
            <img src={spezia} alt="Spezia" />
            <p>
              A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.
            </p>
            <span>FIND NEAR YOU</span>
          </div>
        </div>
      </section>

      {/* FIND US */}
      <section className="find-section">
        <div className="find-heading">
          <h2>
            LAVANDE
            <br />
            SPEZIA
            <br />
            PRIMAVERA
            <br />
            <span>FIND US</span>
          </h2>
        </div>

        <div className="find-bottom">
          <div className="find-text">
            <p>
              EXPERIENCE THE REFINED TASTE OF VÉLOCE. VISIT OUR PREMIUM
              STOCKISTS FOR YOUR NEXT ALCOHOL-FREE APERITIF.
            </p>
          </div>

          <div className="find-image">
            <img src={hand} alt="Drink" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-links">
            <a>FIND STOCKISTS</a>
            <a>ABOUT</a>
          </div>

          <div className="footer-contact">
            <p>(+6) 555-4567</p>
            <p>HELLO@FORM.COM</p>
          </div>
        </div>


        <img src={logoh} alt="footer-logo" className="footer-logo" />
<p className="footer-bottom">COMPANY NAME© 2025 ALL RIGHTS RESERVED</p>


        <img src={strip} alt="divider" className="strip-img" />
      </footer>
    </main>
  );
}
