import "./contact.css";

export default function Contact() {
  return (
    <div className="main-container">
      <text className="title">Nous contacter</text>
      <div className="flexing">
        <div className="mini-contain">
          <text className="mini-text">
            Pour toute réservation, nous vous invitions à contacter directement
            le restaurant par téléphone ou email.
          </text>
          <br />
          <br />
          <br />
          <text>&#127968; Siège Lugnac 4 rue Censier, Paris 7</text>
          <br />
          <text>&#9742; +33 (0)1 42 56 11 26</text>
          <br />
          &#128231;
          <a href="mailto:&#114;&#111;&#109;&#97;&#105;&#110;&#46;&#108;&#97;&#117;&#114;&#101;&#116;&#64;&#101;&#112;&#105;&#116;&#101;&#99;&#104;&#46;&#101;&#117;">
            &#114;&#111;&#109;&#97;&#105;&#110;&#46;&#108;&#97;&#117;&#114;&#101;&#116;&#64;&#101;&#112;&#105;&#116;&#101;&#99;&#104;&#46;&#101;&#117;
          </a>
        </div>
      </div>
    </div>
  );
}
