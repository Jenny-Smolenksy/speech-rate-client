import { ReactMic } from 'react-mic';
import React, { Component } from "react";

export class Mic extends Component {
    constructor(props) {
      super(props);
      this.state = {
        record: false
      }
    }
   
    startRecording = () => {
      this.setState({ record: true });
    }
   
    stopRecording = () => {
      this.setState({ record: false });
    }
   
    onData(recordedBlob) {
      console.log('chunk of real-time data is: ', recordedBlob);
    }
   
    onStop(recordedBlob) {
      console.log('recordedBlob is: ', recordedBlob);
    }
   
    render() {
      return (
        <div>
          <ReactMic
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            onData={this.onData}
            strokeColor="#2453D5"
            backgroundColor="#DADCE1"
             />
          <button  class="btn-custom" onClick={this.startRecording} type="button">
         
          Start
          <i class='fas fa-microphone' />
          </button>
        <button class="btn-custom" onClick={this.stopRecording} type="button">
        
          Stop <i class='fas fa-stop-circle' ></i>
          </button>
          
        </div>
      );
    }
  }
  export default Mic;