import Navbar from './components/Navbar.js';
import News from './components/News.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  const pageSize = 5;
  const country = "us",
  apiKey = process.env.REACT_APP_NEWS_API
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<News apiKey = {apiKey} key="general" pageSize={pageSize} country={country} category="general" />} />
          <Route path="/business" element={<News apiKey = {apiKey} key="business" pageSize={pageSize} country={country} category="business" />} />
          <Route path="/entertainment" element={<News apiKey = {apiKey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />} />
          <Route path="/general" element={<News apiKey = {apiKey} key="general" pageSize={pageSize} country={country} category="general" />} />
          <Route path="/health" element={<News apiKey = {apiKey} key="health" pageSize={pageSize} country={country} category="health" />} />
          <Route path="/science" element={<News apiKey = {apiKey} key="science" pageSize={pageSize} country={country} category="science" />} />
          <Route path="/sports" element={<News apiKey = {apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />} />
          <Route path="/technology" element={<News apiKey = {apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />} />
        </Routes>
    </div>
  );
}

export default App;
