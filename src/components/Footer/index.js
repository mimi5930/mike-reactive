import React from 'react';

const Footer = ({ links }) => {
  return (
    <footer className="navbar fixed-bottom text-white nav-bottom">
      <div className="container-fluid">
        {links.map(link => {
          let { name, url } = link;
          return (
            <a className="text-decoration-none nav-link" key={name} href={url}>
              {name}
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
