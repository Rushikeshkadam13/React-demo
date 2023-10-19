import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  render() {
    const name = "John Doe";

    return (
      <div>
        <h1>Parent Component</h1>
        {/* props is passed to child */}
        <ChildComponent name={name} /> 
      </div>
      
      //there must one one single root element to be returned
    //   {/* <ul>
    //   <li>Invent new traffic lights
    //   <li>Rehearse a movie scene
    //   <li>Improve the spectrum technology
    // </ul> */}
    );
  }
}

export default ParentComponent;


// using functional Component
// function ParentComponent() {
//     const name = "John Doe";
  
//     return (
//       <div>
//         <h1>Parent Component</h1>
//         <ChildComponent name={name} />
//       </div>
//     );
//   }
  
// export default ParentComponent;
