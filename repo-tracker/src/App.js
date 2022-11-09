import React from "react";
import { Routes, Route } from 'react-router-dom'
import { NavBar}  from './components'
import { Home, Search } from './pages'

function App() {
  return (
    <div>
      <NavBar />
      <main>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes> */}
      </main>
    </div>
  );
}

export default App;
