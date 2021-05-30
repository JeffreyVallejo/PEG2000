import { FC } from 'react'
import './App.css';
import HelloWorld from './components/HelloWorld'
import List from './components/Lists'

const avengers = [
  'Captain America',
  'Iron Man',
  'Black Widow',
  'Thor',
  'Hawkeye',
]

const App: FC = () => {
  return (
    <div className="App">
      <HelloWorld />
      <List data={avengers} />
    </div>
  );
}
export default App;
