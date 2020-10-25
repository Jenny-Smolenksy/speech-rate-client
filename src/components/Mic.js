import { ReactMic } from "react-mic";
import React, { Component } from "react";

export class Mic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
    };
  }

  startRecording = () => {
    this.setState({ record: true });
  };

  stopRecording = () => {
    this.setState({ record: false });
  };

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop(recordedBlob) {
    console.log("recordedBlob is: ", recordedBlob);

    //var ft = new File([recordedBlob], "test_wav.wav", { type: "audio/wav" });
    //var ft = new Blob(recordedBlob, { type: "audio/wav; codecs=0" });

    // const data = new FormData();
    // data.append("file", ft);
    // data.append("filename", "fileTESTUP");

    var form = new FormData();
    form.append("file", recordedBlob.blob, "test_rec.wav");
    form.append("title", "title_test");

    fetch("http://localhost:8000/upload", {
      method: "POST",
      body: form,
    }).then((response) => {
      // response.json().then((body) => {
      //   this.setState({ imageURL: `http://localhost:8000/${body.file}` });
      response.json().then((data) => console.log(data));
    });
  }

  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <div className="wave">
          <ReactMic
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            onData={this.onData}
            strokeColor="#D3D5D8"
            backgroundColor="#17325B"
            mimeType="audio/wav"
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <label className="rec-btn">
            <a>
              {"  "}
              {"  "}
              <i class="fas fa-microphone" onClick={this.startRecording}></i>

              <br />
            </a>
          </label>

          <label className="stop-btn">
            <a>
              {"  "}
              {"  "}
              <i class="far fa-stop-circle" onClick={this.stopRecording}></i>

              <br />
            </a>
          </label>
        </div>
      </div>
    );
  }
}

export default Mic;
