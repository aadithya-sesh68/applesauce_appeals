import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
import Dummycomp from "./components/Dummycomp";

const App = () => {

  //const user = JSON.parse(localStorage.getItem('profile'));
  //() => (!user ? <Auth /> : <Navigate to="/posts" />)
  
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dummycomp />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/posts/search" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
    );
};

export default App;