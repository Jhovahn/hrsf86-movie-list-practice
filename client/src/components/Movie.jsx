import React from 'react';
import movies from '../../../database/index.js'

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.movies = movies;
  }

  render() {
    return (
      this.props.movies.map((movie) => (
        <li key={Math.random()*1000}>{movie.title}</li>
      )
     )
   )
  }
}

module.exports = Movie
