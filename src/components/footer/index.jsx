import "./index.css";
import {
  BsGithub,
  BsYoutube,
  BsFacebook,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaReact } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        Build by <a href="https://github.com/ahmedraza41190/News-app"> Ahmed Raza</a>
        {"  "}
        with <FaReact className="FaReact" />
        React
      </div>
      <ul className="iconsContainer">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100009195927085"
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook className="BsFacebook" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ahmedraza41190"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="BsGithub" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ahmed-raza-252bbb288/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="BsLinkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ahmed_raza41190/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram className="BsInstagram" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@ahmedraza8592"
            target="_blank"
            rel="noreferrer"
          >
            <BsYoutube className="BsYoutube" />
          </a>
        </li>
        <li>
          <a href="mailto:ragix.aemi@gmail.com" target="_blank" rel="noreferrer">
            <HiOutlineMail className="HiOutlineMail" />
          </a>
        </li>
      </ul>
    </div>
  );
}
