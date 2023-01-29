import "../css/nav.css";

const Nav = () => {
  return (
    <div className="nav-block">
      <ul>
        <a href="#ABOUT">
          <li>About</li>
        </a>
        <a href="#WORK">
          <li>Work</li>
        </a>
        <a href="#CONTACT">
          <li>Contact</li>
        </a>
        <a href="#LINKEDIN">
          <li>LinkedIn</li>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
