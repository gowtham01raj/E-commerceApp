import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { count2 } = this.state;

    return (
      <div className="about">
        <h2>Count:{this.state.count}</h2>
        <button onClick={()=>{
          this.setState({
            count:this.state.count+2
          })
        }} >Count Increase</button>
        <h2>Name:{this.props.name}</h2>
        <h2>Id:About us</h2>
        <h2>Email:gowthamraj.ts@gmiail.com</h2>
      </div>
    );
  }
}

export default UserClass;
