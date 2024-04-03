import {Component} from 'react'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {searchInput: '', updateList: initialHistoryList, isTrue: false}

  searchText = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    const {updateList} = this.state
    const filterList = updateList.filter(each => each.id !== id)
    if (filterList.length === 0) {
      this.setState({updateList: filterList, isTrue: true})
    } else {
      this.setState({updateList: filterList})
    }
  }

  render() {
    const {searchInput, updateList} = this.state
    const searchResults = updateList.filter(each =>
      each.title.toLowerCase().includes(searchInput),
    )
    let {isTrue} = this.state
    if (searchResults.length === 0){
      isTrue = true
    }else{
      isTrue = false
    }
    return (
      <div className="bg">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="logo-image"
          />
          <div className="input-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-image"
            />
            <input
              type="search"
              className="input"
              onChange={this.searchText}
              value={searchInput}
            />
          </div>
        </div>
        <div>
          {!isTrue && (
            <ul>
              {searchResults.map(each => (
                <li key={each.id}>
                  <p className="time">{each.timeAccessed}</p>
                  <div>
                    <img
                      src={each.logoUrl}
                      className="item-image"
                      alt="domain logo"
                    />
                    <div>
                      <p className="p-name">{each.title}</p>
                      <p className="p-name">{each.domainUrl}</p>
                    </div>
                  </div>
                  <button
                    data-testid="delete"
                    className="delete-btn"
                    type="button"
                    onClick={() => this.deleteItem(each.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                      alt="delete"
                      className="delete-image"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
          {isTrue && (
            <div className="text-con">
              <p className="text">There is no history to show</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
