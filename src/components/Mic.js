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
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081"
        />
        <button onClick={this.startRecording} type="button">
          Start
        </button>
        <button onClick={this.stopRecording} type="button">
          Stop
        </button>
      </div>
    );
  }
}

export default Mic;
