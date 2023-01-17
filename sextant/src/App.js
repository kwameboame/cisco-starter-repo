import Banner from './Banner.js';
import Exhibit from './Exhibit.js';
import IpAddress from './IpAddress.js';
import PylonSocket from './PylonSocket.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Banner bannerTitle="Sextant Dashboard" />
      <div className='exhibits'>
        <Exhibit name="IPv4 Adress">
          <IpAddress url='https://api.ipify.org?format=json' />
        </Exhibit>
        <Exhibit name="IPv6 Adress">
          <IpAddress url='https://api64.ipify.org?format=json' />
        </Exhibit>
        <Exhibit name="Pylon Latency">
          <PylonSocket />
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
