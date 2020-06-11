import React from "react";
import LazyLoad from "react-lazy-load";

const Pic = (props) => {
  return (
    <div className="picture-thumbnail">
      <LazyLoad
      debounce={false}
      >
        <img className="picture" src={props.pic.download_url} />
      </LazyLoad>

      <p className="picture-thumbnail-text">{props.pic.author}</p>
      <div className="picture-info">
        <a href={props.pic.download_url} download={`picsum_${props.pic.id}`}>
          {" "}
          <button className="btn-download">Download image</button>{" "}
        </a>
        <a target="_blank" href={props.pic.url} download>
          <button className="btn">Link to Source</button>{" "}
        </a>
      </div>
    </div>
  );
};

export default Pic;
