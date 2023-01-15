// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/HelloWithJsx';
import HelloNoJsx from './components/HelloWithoutJsx';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import style from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';

function App() {
  return (

    <div className="App">
      <LifecycleA/>
      {/* <Form></Form> */}
      {/* <h1 className={style.success}>Success</h1>
      <Inline></Inline>
      <Stylesheet primary={false}></Stylesheet> */}
      {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <ClassClick></ClassClick> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Counter></Counter> */}
      {/* <Message/> */}
      {/* <Greet/> */}
      {/* <Welcome name="Chins" age="26"/>
      <Welcome name="Chintu" age="31"/>
      <Hello name="Chins" age="26">
        <button type='button'>Action</button>
      </Hello>
      <Hello name="Chintu" age="31"/>
      <HelloNoJsx/> */}
    </div>
  );
}

export default App;
