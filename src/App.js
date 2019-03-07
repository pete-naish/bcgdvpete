import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import ideaActions from './actions/idea-actions';
import Ideas from './components/ideas';

class App extends Component {
  componentDidMount() {
    this.props.getIdeas();
  }

  updateIdea = ({ id, name, value }) => {
    const { updateIdea } = this.props;
    updateIdea({ id, name, value });
  }

  saveIdea = ({ id, title, body }) => {
    const { saveIdea } = this.props;
    // saveIdea({ id, title, body });
  }

  deleteIdea = ({ id }) => {
    const { deleteIdea } = this.props;
    // saveIdea({ id, title, body });
  }

  render() {
    const { isLoading, records, createIdea } = this.props;

    return (
      <div>
        <header>
          <h1>Ideas</h1>
        </header>
        <section>
          <button onClick={createIdea}>Add a new idea</button>
        </section>
        <section>
          Notification
        </section>
        <section>
          <label htmlFor="title">Idea title</label>
          <input id="title" placeholder="Enter a title for your idea" />
          <label htmlFor="body">Idea description</label>
          <input id="body" placeholder="What's your idea?" />
          <button>Save idea</button>
          <p>character limit</p>
        </section>
        <section>
          <label htmlFor="sort">Sort ideas by</label>
          <select defaultValue="created_date" id="sort">
            <option value="created_date">Created date</option>
            <option value="title">Title</option>
          </select>
        </section>
        <Ideas
          ideas={records}
          isLoading={isLoading}
          onChange={this.updateIdea}
          onBlur={this.saveIdea}
        />
      </div>
    );
  }
}

export default connect(
  state => state.ideas,
  {
    getIdeas: ideaActions.getIdeas,
    createIdea: ideaActions.createIdea,
    updateIdea: ideaActions.updateIdea,
    saveIdea: ideaActions.saveIdea,
    deleteIdea: ideaActions.deleteIdea,
  }
)(App);
