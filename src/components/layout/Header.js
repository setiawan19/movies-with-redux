import React from 'react';

function Header() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="header p-3 text-center bg-light text-dark">
            Developed By:
            <b className="text-warning font-weight">
              &nbsp; Mukri Setiawan Baguna
            </b>
            , Using <i className="fab fa-react" /> React JS &amp; Redux JS
            integrated with external movies data API
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
