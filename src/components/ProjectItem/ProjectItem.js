import React from "react";

const ProjectSection = (props) => {
  const imageSide = (
    <div className="col-6 col-xl-4 py-2 px-3">
      <img className="img-fluid" src={props.image} alt="" />
    </div>);

  return (
    <div className="pt-3">
      <div className="container">
        <div className="row">
          { props.inverted
            ? null
            : imageSide
          }
          <div className="col-6 col-xl-8 flex flex-col justify-center">
            <h3 className="color-gray-700">{props.label}</h3>
            <p className="lead text-gray-500 text-center text-md-left">{props.text}</p>
            <div className="d-flex w-100 justify-content-center justify-content-md-start">
              <a href={props.external_url} target="_blank" rel="noreferrer" className="color-blue-gradient">Visitar Página</a>
            </div>
          </div>
          { props.inverted
            ? imageSide
            : null
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
