import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import Listitem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/index';
import './app.scss';

/* This const is not used within our app.
   Although we are passing it to the Headline Component
   it is only here as an exampleof testing PropTypes */
const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: true
}];

class App extends Component {

  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);

  }

  fetch() {
    this.props.fetchPosts();
  }


  render() {

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    const { posts } = this.props;


    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
          <SharedButton {...configButton} />
          {posts.length > 0 &&
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return (<Listitem key={index} {...configListItem} />)

              })}

            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}


export default connect(mapStateToProps, { fetchPosts })(App);
