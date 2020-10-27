import { ReactMic } from "react-mic";
import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";

export class Mic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      isRecordDone: false,
      recUrl: "",
      audio: "",
      recBlob: "",
      isDataResponse: false,
      dataRes: "",
    };
  }

  startRecording = () => {
    this.setState({ record: true });
    this.setState({ isRecordDone: false });
  };

  stopRecording = () => {
    this.setState({ record: false });
    this.setState({ isRecordDone: true });
  };

  onPlay = () => {
    const tmp = new Audio(this.state.recUrl);
    tmp.play();
  };

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    const url = URL.createObjectURL(recordedBlob.blob);
    this.setState({ recUrl: url });
    this.setState({ recBlob: recordedBlob.blob });
  };

  onUpload = () => {
    var form = new FormData();
    form.append("file", this.state.recBlob, "test_record_blob.wav");
    form.append("title", "title_test");

    // alert("Upload Started!");

    const isReachable = async () => {
      const timeout = new Promise((resolve, reject) => {
        setTimeout(reject, 5000, "Request timed out");
      });
      const request = fetch("http://localhost:8000");
      try {
        const response = await Promise.race([timeout, request]);
        //change to uploading
        this.props.isOnUpload();
        fetch("http://localhost:8000/upload", {
          method: "POST",
          body: form,
        }).then((response) => {
          // response.json().then((body) => {
          //   this.setState({ imageURL: `http://localhost:8000/${body.file}` });
          // response.json().then((data) => console.log(data));
          response.json().then((data) => {
            // this.setState({ dataRes: data });
            // this.setState({ isDataResponse: true });
            this.props.isResponse(data);
            console.log(data);
          });
        });
        // return alert("connection succeded!");
      } catch (error) {
        // this.setState({ isServerUp: false });
        return alert("Server is unavailable! please try again later..");
      }
    };

    isReachable();
  };

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
            sampleRate={16000}
          />
        </div>
        <div style={{ textAlign: "left" }}>
          {/* pause */}
          <label className="rec-btn">
            <a>
              {"  "}
              {"  "}
              <i class="far fa-pause-circle" onClick={this.stopRecording}></i>

              <br />
            </a>
          </label>

          {/* stop */}
          <label className="rec-btn">
            <a>
              {"  "}
              {"  "}
              <i class="far fa-stop-circle" onClick={this.stopRecording}></i>

              <br />
            </a>
          </label>

          {/* record */}
          <label className="rec-btn">
            <a>
              {"  "}
              {"  "}
              <i class="fas fa-microphone" onClick={this.startRecording}></i>

              <br />
            </a>
          </label>

          {/* play */}
          <label className="rec-btn">
            <a>
              {"  "}
              {"  "}
              <i class="far fa-play-circle" onClick={this.onPlay}></i>

              <br />
            </a>
          </label>

          {/* upload */}
          <label className="rec-btn">
            <a>
              {"  "}
              {"  "}
              <i class="fas fa-upload" onClick={this.onUpload}></i>

              <br />
            </a>
          </label>
        </div>
        {/* {this.state.isRecordDone ? (
          <div>
            {" "}
            <AudioPlayer
              autoPlay="false"
              src={this.state.recUrl}
              onPlay={(e) => console.log("onPlay")}
              // other props here
              strokeColor="#D3D5D8"
              backgroundColor="#17325B"
            />
          </div>
        ) : null} */}
      </div>
    );
  }
}

export default Mic;
