import logo from "../logo.svg";
import "./header.css";

export default function Header() {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <span>Media Library</span>
    </header>
  );
}
