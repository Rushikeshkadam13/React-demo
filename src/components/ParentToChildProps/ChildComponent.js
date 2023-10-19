import React from 'react';

//using class Component
class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Child Component</h2>
        <p>Hello, {this.props.name}!</p>
      </div>
    );
  }
}

export default ChildComponent;

//using functional Component
// function ChildComponent(props) {
//     return (
//       <div>
//         <h2>Child Component</h2>
//         <p>Hello, {props.name}!</p>
//       </div>
//     );
//   }
  
//   export default ChildComponent;