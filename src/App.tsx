import React, { useState } from 'react';
import './App.css';
import poster from './poster.jpeg'; // 포스터 이미지 경로

interface Band {
  name: string;
  setList: string[];
  session: string[];
  time: string;
}

const bands: Band[] = [
  {
    name: "박건욱밴드",
    setList: ["관객이 될게 - 아이유", "청록 - 이츠", "이구아나 - 강산에", "대나무숲 - 너드커넥션", "금붕어 - 한로로", "해피데이 - 체리필터",
    "콜링 - 유다빈밴드", "곁에 - 유다빈밴드", "찬란 - 나상현씨밴드"],
    session: ["V - 김나현, 임소희, 정은우, 이채연", "G - 김민호, 조한준", "K - 이현나", "B - 김보미, 정보아", "D - 강구슬, 박건욱"],
    time: "18:00~19:00"
  },
  {
    name: "이륙26",
    setList: ["Far Away - Lacuna", "미안하다는 말 - YEGNY", "Pretender - Official Hige Dandism", "1998 - Lacuna",
      "살아있는 너의 밤 - 쏜애플", "입춘 - 한로로", "안중 - 유다빈밴드", "Raise Up The Flag - 권진아",
      "November Rain - 잔나비"],
    session: ["V - 박창수, 황채린", "G - 홍기정, 박창수, 신윤식", "K - 이현나, 최지민", "B - 허상준", "D - 주지훈"],
    time: "19:00~20:00"
  },
  {
    name: "먹구름",
    setList: ["그대만 있다면 - 너드커넥션", "각자의 밤 - 나상현씨밴드", "너에게 닿기를 - 10cm", "위잉위잉 - 혁오", "스물다섯 스물하나 - 자우림",
    "NO PAIN - 실리카겔", "Antifreeze - 검정치마", "그대에게 - 신해철"],
    session: ["V - 장현진, 임현우", "G - 우서준, 장현진, 임현우", "K - 윤나영", "B - 김서해", "D - 최지민"],
    time: "20:00~21:00"
  }
];

const App: React.FC = () => {
  const [selectedBand, setSelectedBand] = useState<Band | null>(null);

  const handleBandClick = (band: Band) => {
    setSelectedBand(band);
  };

  return (
      <div className="App">
        <header className="App-header">
          <img src={poster} alt="Concert Poster" className="poster"/>
          <h1>Set List</h1>
        </header>
        <div className="bands">
          {bands.map((band, index) => (
              <div key={index} className="band" onClick={() => handleBandClick(band)}>
                {band.name} {band.time}
              </div>
          ))}
        </div>
        {selectedBand && (
            <div className="content">
              <div className="set-list">
                <h2>{selectedBand.name}</h2>
                <ul>
                  {selectedBand.setList.map((song, index) => (
                      <li key={index}>{song}</li>
                  ))}
                </ul>
              </div>
              <div className="vertical-line"></div>
              <div className="session-list">
                <h2>Sessions</h2>
                <ul>
                  {selectedBand.session.map((session, index) => (
                      <li key={index}>{session}</li>
                  ))}
                </ul>
              </div>
            </div>
        )}
      </div>
  );
}

export default App;
