//import { render } from "@testing-library/react";
import React, { Component } from "react";
import Mic from "./Mic";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: "",
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append("file", this.uploadInput.files[0]);
    data.append("filename", "fileTESTUP");

    // data.append("filename", this.fileName.value);

    fetch("http://localhost:8000/upload", {
      method: "POST",
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:8000/${body.file}` });
      });
    });
  }
  render() {
    return (
      <div id="banner1" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#banner1" data-slide-to="0" class="active"></li>
          <li data-target="#banner1" data-slide-to="1"></li>
          <li data-target="#banner1" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="carousel-caption">
                <div class="row">
                  <div class="col-md-8">
                    <div class="text-bg">
                      <h2>How fast can you talk?</h2>
                      <h1>Check speech rate</h1>
                      <h2>
                        {" "}
                        Meassure speech rate by uploading sound file <br /> or
                        record your own speech
                      </h2>
                      <label>
                        <a>
                          Record {"  "}
                          {"  "}
                          <i
                            class="fas fa-record-vinyl"
                            style={({ fontSize: "24px" }, { color: "#16ABF6" })}
                          ></i>
                          <br />
                        </a>
                      </label>

                      <label>
                        <a>
                          Upload file {"  "}
                          {"  "}
                          <i
                            class="fas fa-upload"
                            style={({ fontSize: "24px" }, { color: "#16ABF6" })}
                          ></i>
                          <input
                            ref={(ref) => {
                              this.uploadInput = ref;
                            }}
                            type="file"
                            style={{ display: "none" }}
                            onChange={this.handleUploadImage}
                          />
                          <br />
                        </a>
                      </label>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="text_img">
                      <figure>
                        <img
                          src={require("./../assets/images/pct.png")}
                          alt="#"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="carousel-item">
            <div class="container">
              <div class="carousel-caption">
                <div class="row">
                  <div class="col-md-8">
                    <div class="text-bg">
                    <span>The use in Machine learning algorithms</span>     
                             <h2>we used Neural network algorithms to train a model <br/> to detech vowel on given text <br/>
                             using the vowels count, we can detect your speech rate.</h2>            
                     
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="text_img1">
                      <figure>
                        <img
                          src={require("./../assets/images/ml.jpg")}
                          alt="#"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
         <div class="carousel-item">
          
         </div> */}
        </div>
        <a
          class="carousel-control-prev"
          href="#banner1"
          role="button"
          data-slide="prev"
        >
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </a>
        <a
          class="carousel-control-next"
          href="#banner1"
          role="button"
          data-slide="next"
        >
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </a>
      </div>
    );
  }
}

export default Home;
