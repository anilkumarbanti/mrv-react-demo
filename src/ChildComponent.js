import React from "react";
class ChildComponent extends React.Component {
    sendMessage = () => {
      this.props.onMessage('Hello from Child!');
    }
  
    render() {
      return (
        <button onClick={this.sendMessage}>Send Message</button>
      );
    }
  }

  export default ChildComponent;