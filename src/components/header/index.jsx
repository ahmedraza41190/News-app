import "./index.css";
import moment from "moment";
import { BsFillMoonFill, BsSun } from "react-icons/bs";


export default function Header(props) {
  return (
    <div className="header">
      <h1><img src={require("../../Assets/Rotating_earth_(large)_transparent.gif")} className="" alt="Ahmed Raza" width={50} height={50} /> News App</h1>

      <div className="flex">
        
        <div className="dateDiv">
          <div id="date">{moment().format("D MMM YYYY")}</div>
          <div id="time">{moment().format("h:mm:s a")}</div>
        </div>
        <button
          type="button"
          className="themeBtn"
          onClick={props.toggleThemeMode}
        >
          {props.mode ? <BsFillMoonFill /> : <BsSun />}
        </button>
      </div>
    </div>
  );
}
