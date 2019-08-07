import React from 'react'
import searchLogo from '../img/search.svg'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }

  render() {
    const { title, action } = this.props
    return(
      <div className="search-container">
        <input className="search-input" type="text" placeholder={title} name="search-input" value={this.state.search} onChange={(e) => {
          const newValue= e.target.value
          this.setState({ search: newValue})
          action(newValue)
        }} />
        <img className="search-button" src={searchLogo} alt="search" />
      </div>
    )
  }
}

export default Search