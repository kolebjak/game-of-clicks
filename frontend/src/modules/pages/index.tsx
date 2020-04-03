import * as React from 'react';
import Leaderboard from '../leaderboard';
import { push, RouterAction } from 'connected-react-router';
import { connect } from 'react-redux';

export type Props = {
  pushLocation: (location: string) => RouterAction,
};

export type State = {
  teamName?: string,
};

class IndexPage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {teamName: undefined};
  }

  onChange(e: React.FormEvent<HTMLInputElement>) {
    const teamName = e.currentTarget.value;
    this.setState({teamName});
  }

  onSubmit() {
    const {teamName} = this.state;
    const {pushLocation} = this.props;
    if (teamName) {
      pushLocation(`/${teamName}`);
    }
  }

  render() {
    return (
      <div className="page-container">
        <div className="page">
          <form onSubmit={this.onSubmit} className="teamNameForm">
            <label htmlFor="teamNameInput">Enter your team name:</label><br/>
            <input id="teamNameInput" onChange={this.onChange} required={true} />
            <button type="submit" className="btn btn--small">click</button>
          </form>
          <h2>Top 10 clickers</h2>
          <Leaderboard/>
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), {
  pushLocation: push,
})(IndexPage);
