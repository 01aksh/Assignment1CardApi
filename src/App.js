import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Navbar from "./pages/Navbar/Navbar";
import Loader from "./components/Loader/Loader";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = "https://reqres.in/api/users?page=1";

  const getAllUsers = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data.data));
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      getAllUsers();
    }
  }, [loading]);
  return (
    <div >
      <Navbar getAllUsers={() => setLoading(true)} />
      {loading ? (
        <Loader />
      ) : (
        <div className="card-grid">
          {posts &&
            posts.length > 0 &&
            posts.map((user) => {
              return <Card user={user} />;
            })}
        </div>
      )}
    </div>
  );
}

export default App;
