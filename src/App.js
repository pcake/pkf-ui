import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Identity from './pages/Identity';



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Identity">Identity</Link>
            </li>
            <li>
              <Link to="/Users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Identity" element={<Identity />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
