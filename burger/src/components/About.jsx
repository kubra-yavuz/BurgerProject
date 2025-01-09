import BannerImage from "../../src/assets/banneryeni.jpg";
import "./css/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div>
        <h1 className="aboutBottom">Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          quidem velit officia omnis laudantium asperiores illum eaque,
          voluptate tempora mollitia quia recusandae nisi consequuntur veritatis
          vero iure consectetur. Illum, cumque? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Doloribus officiis modi eum repellat
          praesentium vitae corporis temporibus, tempore quia quis accusamus
          maxime ea, non asperiores sed adipisci ullam! Temporibus, iste! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Odio nemo odit
          facilis architecto sed, id laborum cupiditate facere dignissimos?
          Cumque reprehenderit, veniam veritatis tempore ad voluptatem ipsam
          atque illo numquam?
        </p>
      </div>
    </div>
  );
};

export default About;
