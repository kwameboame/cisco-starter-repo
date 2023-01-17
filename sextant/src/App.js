import Banner from './Banner.js';
import Exhibit from './Exhibit.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner bannerTitle="Sextant Dashboard" />
      <div className='exhibits'>
        <Exhibit name="Data1">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </Exhibit>

        <Exhibit name="Data2">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </Exhibit>
        <Exhibit name="Data3">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </p>
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
