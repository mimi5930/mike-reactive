import React from 'react';

const Resume = () => {
  return (
    <section className="container-fluid">
      <h1 className="text-center m-5 fs-1">Mike's Resume</h1>
      <div className="container-fluid row justify-content-center">
        <a
          className="btn btn-primary p-3"
          href="../../assets/docs/miller-dev-resume.pdf"
          download
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
