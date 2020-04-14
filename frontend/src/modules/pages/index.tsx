import * as React from 'react';
import Leaderboard from '../leaderboard';
import {push, RouterAction} from 'connected-react-router';
import {connect} from 'react-redux';
import PageContainer from "./components/PageContainer";
import Page from "./components/Page";
import Button, {ButtonSize} from "./components/Button";

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
            <PageContainer>
                <Page>
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="teamNameInput">Enter your team name:</label><br/>
                        <input id="teamNameInput" onChange={this.onChange} required={true}/>
                        <Button size={ButtonSize.small} type="submit">click</Button>
                    </form>
                    <h2>Top 10 clickers</h2>
                    <Leaderboard/>
                </Page>
            </PageContainer>
        );
    }
}

export default connect(() => ({}), {
    pushLocation: push,
})(IndexPage);
