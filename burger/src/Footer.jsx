import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./components/css/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
      <p> Tüm hakları saklıdır. | BurgerYiyelim</p>
    </div>
  );
}
