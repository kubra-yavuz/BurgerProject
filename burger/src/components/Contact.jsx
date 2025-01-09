import Banner from "../../src/assets/banner.png";
import "./css/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label htmlFor="">Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı ve soyadınızı giriniz..."
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen emailinizi giriniz..."
          />
          <label htmlFor="">Mesajınız</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Lütfen mesajınızı giriniz..."
          >
            {" "}
          </textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
