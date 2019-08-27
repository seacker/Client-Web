import React, {Component} from 'react'

class Application extends Component {
    constructor(props) {
      super(props);
      this.state = { x: 0, y: 0 };
    }
    _onMouseMove(e) {
      this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }
    render() {
      const { x, y } = this.state;
      return <div className="container">
        <div style={{marginTop:'100px'}}>
          <img onMouseMove={this._onMouseMove.bind(this)} width="70%" height="100%" 
                src={require("../assets/tengahBawahretake.png")} />
    
        </div>
        <h1>{ x } { y }</h1><br/>
      </div>;
    }
  }
export default Application