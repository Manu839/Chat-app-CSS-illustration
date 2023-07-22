
import './App.css';
import Chat from './components/Chat';
import Sectionone from './components/Sectionone';

function App() {
  return (<>
    <div className="">
  <main  className="flex max-[810px]:flex-col xl:gap-36">
    <Chat/>
    <Sectionone/>
  </main>
</div>
</>
  );
}

export default App;
