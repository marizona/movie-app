import React, { Component } from "react";
import { Header, MovieDetails, MovieList } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: "The Godfather",
          img: "https://flxt.tmsimg.com/assets/p24674_p_v8_ae.jpg",
          details: "R | 175 min | Crime, Drama",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptates nam quibusdam fugit molestias eum soluta odio at qui necessitatibus sequi nisi quas dolore amet ea deserunt ipsa animi porro?",
        },
        {
          title: "The Godfather",
          img: "https://flxt.tmsimg.com/assets/p24674_p_v8_ae.jpg",
          details: "R | 175 min | Crime, Drama",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptates nam quibusdam fugit molestias eum soluta odio at qui necessitatibus sequi nisi quas dolore amet ea deserunt ipsa animi porro?",
        },
        {
          title: "The Godfather",
          img: "https://flxt.tmsimg.com/assets/p24674_p_v8_ae.jpg",
          details: "R | 175 min | Crime, Drama",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptates nam quibusdam fugit molestias eum soluta odio at qui necessitatibus sequi nisi quas dolore amet ea deserunt ipsa animi porro?",
        },
        {
          title: "The Godfather",
          img: "https://flxt.tmsimg.com/assets/p24674_p_v8_ae.jpg",
          details: "R | 175 min | Crime, Drama",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptates nam quibusdam fugit molestias eum soluta odio at qui necessitatibus sequi nisi quas dolore amet ea deserunt ipsa animi porro?",
        },
        {
          title: "The Godfather",
          img: "https://flxt.tmsimg.com/assets/p24674_p_v8_ae.jpg",
          details: "R | 175 min | Crime, Drama",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, voluptates nam quibusdam fugit molestias eum soluta odio at qui necessitatibus sequi nisi quas dolore amet ea deserunt ipsa animi porro?",
        },
      ],
      selectedMovie: 0,
    };
  }
  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <div className="d-flex flex-row flex-fill pt-2">
          <MovieList movies={this.state.movies}/>
          <MovieDetails movies={this.state.movies[this.state.selectedMovie]} />
        </div>
      </div>
    );
  }
}

export default App;
