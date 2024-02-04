import logo from "./logo.svg";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx8YqwRM_R1H3CEv7hLIyVtMyFH2TiiXI",
  authDomain: "blaring-infrared-orchestra.firebaseapp.com",
  projectId: "blaring-infrared-orchestra",
  storageBucket: "blaring-infrared-orchestra.appspot.com",
  messagingSenderId: "315861489073",
  appId: "1:315861489073:web:6aa1ad8684cad958115990",
  measurementId: "G-SZWEEFJMYB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
