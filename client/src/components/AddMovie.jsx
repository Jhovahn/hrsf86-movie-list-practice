import React from 'react';


class AddMovie extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form>
        <input type="text" placeholder="Add movie title here" />
        <button>Add</button>
      </form>
    )
  }
}


module.exports = AddMovie
