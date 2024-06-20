import logo from './logo.svg';
import './App.css';
import Overview from './Overview';
import JSXBasics from './JSXBasics';
import ClassComponentDemo from './ClassComponentDemo';
import PropsFunDemo from './PropsFunDemo';
import PropsClassDemo from './PropsClassDemo';
function App() {
  return (
    <div className="App">
     <h1>hello this is my first page</h1>
     <Overview></Overview>
     <JSXBasics></JSXBasics>
     <ClassComponentDemo></ClassComponentDemo>
     <PropsFunDemo name="Anil Banti"></PropsFunDemo>
     <PropsClassDemo rollNumber="12831A1277"></PropsClassDemo>
     
    </div>
  );
}

export default App;