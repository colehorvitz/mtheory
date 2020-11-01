import './App.css';
import Interface from './components/Interface';
import { BsMusicNoteBeamed } from "react-icons/bs";
function App() {
  return (
    <div className="App">
      <div id="title">
        <div id="note-wrap">
          <BsMusicNoteBeamed id="note"/>
        </div>
        <h1>mtheory</h1>
      </div>
      <Interface />
    </div>
  );
}

export default App;
