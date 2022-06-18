import './App.css';
import Header from './components/header';
import AppContext from './components/context';
import FilePicker from './components/form/filePicker';
import ShowCaption from './components/showCaption';
import FirstInput from './components/form/firstInput';
import SecondInput from './components/form/secondInput';

function App() {
  return (
    <AppContext>
      <Header/>
      <main className="App">
        <FilePicker />
        <FirstInput />
        <SecondInput />
        <ShowCaption />
      </main>
    </AppContext>
  );
}

export default App;
