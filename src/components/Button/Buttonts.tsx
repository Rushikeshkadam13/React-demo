import * as React from "react";

// function MyButton({ title }: { title: string }) {
//     return (
//       <button>{title}</button>
//     );
//   }
  
//   export default function MyApp() {
//     return (
//       <div>
//         <h1>Welcome to my app</h1>
//         <MyButton title="I'm a button" />
//       </div>
//     );
//   }



  // This inline syntax is the simplest way to provide types for a component, 
  // though once you start to have a few fields to describe it can become unwieldy. 
  // Instead, you can use an interface or type to describe the component’s props:

  interface MyButtonProps {
    /** The text to display inside the button */
    title: string;
    /** Whether the button can be interacted with */
    disabled: boolean;
  }
  
  //function MyButton({ title, disabled }: MyButtonProps) {
    function MyButton(props :MyButtonProps) {
    return (
      //<button disabled={disabled}>{title}</button>
      <button disabled={props.disabled}>{props.title}</button>
    );
  }
  
  export default function MyApp() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton title="I'm a disabled button" disabled={true}/>
      </div>
    );
  }
  