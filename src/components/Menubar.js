

import { Link } from "react-router-dom";

function MenuBar() {
    return (
      <div className="art-menu-bar">

      {/* <!-- menu bar frame --> */}
      <div className="art-menu-bar-frame">

        {/* <!-- menu bar header --> */}
        <div className="art-menu-bar-header">
          {/* <!-- menu bar button --> */}
          <a className="art-menu-bar-btn" href=".#">
            {/* <!-- icon --> */}
            <span></span>
          </a>
          {/* <!-- menu bar button end --> */}
        </div>
        {/* <!-- menu bar header end --> */}

        {/* <!-- current page title --> */}
        <div className="art-current-page"></div>
        {/* <!-- current page title end --> */}

        {/* <!-- scroll frame --> */}
        <div className="art-scroll-frame">

          {/* <!-- menu --> */}
          <nav id="swupMenu">
            {/* <!-- menu list --> */}
            <ul className="main-menu">
              {/* <!-- Home --> */}

              <li className="menu-item "><Link to="/">Home</Link></li>

              {/* <!-- menu item --> */}
              <li className="menu-item"><Link to="/projects">Projects</Link></li>
              {/* <!-- menu item --> */}
              <li className="menu-item"><Link to="/certification">Certifications</Link></li>
              {/* <!-- menu item --> */}
              <li className="menu-item"><Link to="/history">History</Link></li>
              {/* <!-- menu item --> */}
              <li className="menu-item"><Link to="/interests">Interests</Link></li>
              {/* <!-- menu item --> */}
            </ul>
            {/* <!-- menu list end --> */}
          </nav>
          {/* <!-- menu end --> */}

          {/* <!-- language change --> */}
          <ul className="art-language-change">
            {/* <!-- language item --> */}
            <li><a href="#.">FR</a></li>
            {/* <!-- language item --> */}
            <li className="art-active-lang"><a href="#.">EN</a></li>
          </ul>
          {/* <!-- language change end --> */}

        </div>
        {/* <!-- scroll frame end --> */}

      </div>
      {/* <!-- menu bar frame --> */}

    </div>
  );
}

export default MenuBar;
