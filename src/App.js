import logo from './logo.svg';
import './App.css';
import Overview from './Overview';
import JSXBasics from './JSXBasics';
import ClassComponentDemo from './ClassComponentDemo';
import PropsFunDemo from './PropsFunDemo';
import PropsClassDemo from './PropsClassDemo';
import ParentComponent from './ParentComponent';
import SetSatetParent from './components/setStateParent';
import UseStateParent from './components/useStateParent';
import SetState from './components/SetState';
import LifeCycleDemoClassComp from './components/LifeCycleDemoClassComp';
import LifeCycleDemoFunComp from './components/LifeCycleDemoFunComp';
import ContactForm from './components/ContactForm';
import UserForm from './components/UserForm';
import DataFetcher from './components/DataFetcher';
import LoginForm from './components/LoginForm';
import Calculator from './components/Calculator';
import { Link, Router, Routes } from 'react-router-dom';
import Products from './routingdemo/Products';
import Home from './routingdemo/Home';
import ProductDetails from './routingdemo/ProductDetails';
import Cart from './routingdemo/Cart';

import { BrowserRouter as  Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">

     {/*<h1>hello this is my first page</h1>
     <Overview></Overview>
     <JSXBasics></JSXBasics>
     <ClassComponentDemo></ClassComponentDemo>
     <PropsFunDemo name="Anil Banti"></PropsFunDemo>
     <PropsClassDemo rollNumber="12831A1277"></PropsClassDemo>
     <ParentComponent></ParentComponent>
      <SetSatetParent></SetSatetParent>
      < UseStateParent></UseStateParent>
      <SetState></SetState>
      <LifeCycleDemoClassComp></LifeCycleDemoClassComp>
      <LifeCycleDemoFunComp></LifeCycleDemoFunComp>
      <UserForm></UserForm>
       <DataFetcher></DataFetcher>
       <LoginForm></LoginForm>
       <Calculator/>
     */}

     <Router>
      <nav>
        <Link to ="/">Home</Link> | <Link to ="/products">Products</Link> | <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Products}/>
        <Route path="/products/:productID" component={ProductDetails} />
        <Route path="/cart" component={Cart}/>

      </Routes>

     </Router>

     


    
     
    </div>
  );
}

export default App;
