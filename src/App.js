import logo from './logo.svg';
import './App.css';
import Tabs from './Components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs items={[
        {label: "Tab 1", content: "Lorem ipsum, dolor sit amet consectetur. Consectetur, temporibus! Quasi?"},
        {label: "Tab 2", content: "Ipsum, dolor consectetur sit amet  adipisicing elit. Consectetur, temporibus!"},
        {label: "Tab 3", content: "Sit amet consectetur adipisicing elit. Consectetur Lorem ipsum, dolor, temporibus! Quasi?"},
        {label: "Tab 4", content: "Dolor sit amet consectetur  emporibus! quasi adipisicing elit. Consectetur"}
      ]} />
    </div>
  );
}

export default App;
