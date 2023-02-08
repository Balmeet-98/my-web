import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="edu" id="edu">
        <div class="container">
          <div class="row">
            <h1 className="educ-heading d-flex justify-content-center">
              <b>Education</b>
            </h1>

            <div class="card-body">
              <h5 class="card-title">Editor</h5>
              <h6 class="card-subtitle mb-2 text-muted">(2035 - Present)</h6>
              <p class="card-text mb-3">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
            <div class="card-body">
              <h5 class="card-title">Writer at Large</h5>
              <h6 class="card-subtitle mb-2 text-muted">(2035 - 2035)</h6>
              <p class="card-text mb-3">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
