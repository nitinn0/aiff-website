import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import News from "./Components/News/News"; // News component
import Team from "./Components/Team/Team";
import Home from "./Components/Home/Home";
// import Home from "./Components/Home/Home";

const App = () => {
  const heroData = [
    { text1: "Team INDIA", text2: "2023 Qualifiers", extraText: "We play with passion, pride, and the spirit of our nation. Support us with all your might!"},
    { text1: "We are", text2: "Together in it", extraText: "After a defeat of 2-0 to Qatar, boys are ready to take revenge on their opponents." },
    { text1: "Show the", text2: "world who we are", extraText: "With every match, we etch our legacy in history. Its time we prove ourselves."},
  ];

  const [heroCount, setHeroCount] = useState(0);  

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Background heroCount={heroCount} />
                <Hero
                  heroData={heroData[heroCount] || { text1: '', text2: '' }}
                  heroCount={heroCount}
                  setHeroCount={setHeroCount}
                />
              </>
            }
          />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/home" element={<Home/>} />
          <Route path="/news" element={<News />} />
          <Route path='/team' element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
