import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
     }


  }

  change = (e) => {
    
    this.props.recherche(e.target.value)

  }

  Search = () => {
    
     this.props.recherche(this.state.text)
     this.setState({
       text:""
     })
    
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="type name to search" onChange={this.change} />
        <button onClick={ this.Search}>search</button>
      </div>
    );
  }
}

export default Search;










