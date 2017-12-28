import React from 'react';
import ReactDOM  from 'react-dom';
import Movie from './components/Movie.jsx';
import movies from '../../database/index.js';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';


class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.movies = movies;
  }

  render() {
    return (
      <div>
        <div>
          <AddMovie/>
        </div>
        <div>
          <div>
            
          </div>
          <div>
            <Search/>
          </div>
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
