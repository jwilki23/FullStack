import logo from './JoelHiltonHeadshot.jpg';
//A header that is exported to be used on main page.
function Header(props: any) {
  return (
    <header className="row">
      <div className="col-4">
        <img src={logo} alt="Logo" />
      </div>
      <div className="col">
        <h3>{props.slogan}</h3>
      </div>
    </header>
  );
}

export default Header;
