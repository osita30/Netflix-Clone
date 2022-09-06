import React from "react";
import Row from "./Row";
import "./App.css";
import request from "./Requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Treanding Now" fetchUrl={request.fetchTrending} />
      <Row title="TopRated" fetchUrl={request.fetchTopRated} />
      <Row title="ActionMovies" fetchUrl={request.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={request.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
