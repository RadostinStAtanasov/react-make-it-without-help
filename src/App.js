import Cards from './components/Cards';
import Header from './components/Header';
import { concepts } from './DummyData';

function App() {
  return (
    <div>
      <Header />
      <Cards cards={concepts}/>
    </div>
  );
}

export default App;
