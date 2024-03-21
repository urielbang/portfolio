import "./index.css";
export default function NavBar() {
  return (
    <nav className="navBar">
      <a className="logoName">
        <span>{`<`}</span>URI-B<span>{`/>`}</span>
      </a>

      <ul className="containerList">
        <a>
          {`Start`}
          <span>{`/>`}</span>
        </a>
        <a>
          {`Work`}
          <span>{`/>`}</span>
        </a>
        <a>
          {`Lab`}
          <span>{`/>`}</span>
        </a>
        <a>
          {`About`}
          <span>{`/>`}</span>
        </a>
        <a>
          {`Contact`}
          <span>{`/>`}</span>
        </a>
      </ul>
    </nav>
  );
}
