import React from 'react';

export default function Footer() {
    let date = new Date();
  return (
    <div>
      <footer
        className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top"
        style={{ backgroundColor: '#000000'}}
      >
        <div className="col-md-4 d-flex justify-content-center">
          <span className="" style={{color:'#ffffff'}}>© {date.getFullYear()} Musk Al Mahal</span>
        </div>
      </footer>
    </div>
  );
}
