import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx'
import movies from '../../database/index.js'


class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.movies = movies;
  }

  render() {
    return (
      <div>
        <div>
        </div>
        <div>
            <ul>
                <Movie movies={this.movies}/>
            </ul>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<MovieList />, document.getElementById('app'));
