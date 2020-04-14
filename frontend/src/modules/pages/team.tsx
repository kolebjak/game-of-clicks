import * as React from 'react';
import Leaderboard from '../leaderboard';
import {connect} from 'react-redux';
import {
    clickAction, ClickActionResponse, fetchTeamClicksAction, FetchTeamClicksActionResponse, setTeamNameAction,
    SetTeamNameActionResponse
} from '../app/actions';
import {selectTeamClicks, selectTeamName, selectYourClicks} from '../app/reducer';
import {State} from '../../types';
import PageContainer from "./components/PageContainer";
import Page from "./components/Page";
import styled from "styled-components";
import Button, {ButtonSize} from "./components/Button";

type Props = {
    match: {
        params: {
            teamName: string,
        }
    },
    click: () => ClickActionResponse,
    teamClicks: number,
    yourClicks: number,
    teamName: string,
    setTeamName: (teamName: string) => SetTeamNameActionResponse,
    fetchTeamClicks: (teamName: string) => FetchTeamClicksActionResponse,
};

const Clicks = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
  
  & .clicks__clickCount {
    font-size: 30px;
    font-weight: bold;
    color: #3878de;
  }
`

const Label = styled.span`
  font-style: italic;
  font-size: 12px;
`

const Count = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #3878de;
`

class TeamPage extends React.Component<Props> {

    componentDidMount() {
        const teamName = this.props.match.params.teamName;
        this.props.setTeamName(teamName);
        this.props.fetchTeamClicks(teamName);
    }

    render() {
        const {click, yourClicks, teamClicks, teamName} = this.props;
        return (
            <PageContainer>
                <h1>Clicking for team <strong>{teamName}</strong></h1>
                <p>Too lazy to click? Share this link <input value={window.location.href} readOnly={true}/></p>
                <Page>
                    <Button size={ButtonSize.large} onClick={click}>click!</Button>
                    <Clicks>
                        <div>
                            <Label>Your clicks:</Label>
                            <Count>{yourClicks}</Count>
                        </div>
                        <div>
                            <Label>Team clicks:</Label>
                            <Count>{teamClicks}</Count>
                        </div>
                    </Clicks>
                    <Leaderboard selected={teamName}/>
                </Page>
            </PageContainer>
        );
    }
}

export default connect((state: State) => ({
    teamClicks: selectTeamClicks(state),
    yourClicks: selectYourClicks(state),
    teamName: selectTeamName(state),
}), {
    click: clickAction,
    setTeamName: setTeamNameAction,
    fetchTeamClicks: fetchTeamClicksAction,
})(TeamPage);
