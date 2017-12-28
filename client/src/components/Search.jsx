import React from 'react';


class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..."/>
        <button>Go</button>
      </form>
    )
  }
}


module.exports = Search
