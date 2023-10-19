import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App/App';
// import List from './components/List/List';
// import Image from './components/Image/Image';
// import Button from './components/Button/Button';
import Popover from './components/Popover/Popover';
import reportWebVitals from './reportWebVitals';
import MyApp from './components/Button/Buttonts';
//import ParentComponent from './components/UseCallback/Usecallback'
import Example from './components/Example/Example'
import ParentComponent from './components/ParentToChildProps/ParentComponent'
import BeautifulComponent from './components/BeautifulComponent/BeautifulComponent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Button/>
  <Button/>
   <App/>
    <List />
    <Image/> */}
    <Popover content="This is a popover">
        <button>Hover me</button>
      </Popover>
      <MyApp/>
      <Example/>
      <ParentComponent/>
      <BeautifulComponent/>

   
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
