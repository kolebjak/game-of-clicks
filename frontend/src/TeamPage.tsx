import * as React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useContext } from 'react';
import Button, { ButtonSize } from './components/Button';
import Page from './components/Page';
import PageContainer from './components/PageContainer';
import Leaderboard, { LEADERBOARD_QUERY } from './Leaderboard';
import SessionContext from './context';

const Clicks = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;

  & .clicks__clickCount {
    font-size: 30px;
    font-weight: bold;
    color: #3878de;
  }
`;

const Label = styled.span`
  font-style: italic;
  font-size: 12px;
`;

const Count = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #3878de;
`;

const QUERY = gql`
  query Click($session: String!, $team: String!) {
    click(session: $session, team: $team) {
      id
      team
      sessionCount
      teamCount
    }
  }
`;

const MUTATION = gql`
  mutation AddClick($session: String!, $team: String!) {
    addClick(session: $session, team: $team) {
      id
      team
      sessionCount
      teamCount
    }
  }
`;

const TeamPage: React.FC = () => {
  const { teamName } = useParams();
  const session = useContext(SessionContext);

  const { data, loading, error } = useQuery(QUERY, {
    variables: { team: teamName, session },
  });
  const [addClick] = useMutation(MUTATION, {
    variables: { team: teamName, session },
    refetchQueries: [{ query: LEADERBOARD_QUERY }],
  });

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <PageContainer>
      <h1>
        Clicking for team
        <strong>{teamName}</strong>
      </h1>
      <p>
        Too lazy to click? Share this link
        <input value={window.location.href} readOnly />
      </p>
      <Page>
        <Button size={ButtonSize.large} onClick={() => addClick()}>
          click!
        </Button>
        <Clicks>
          <div>
            <Label>Your clicks:</Label>
            <Count>{data.click.sessionCount}</Count>
          </div>
          <div>
            <Label>Team clicks:</Label>
            <Count>{data.click.teamCount}</Count>
          </div>
        </Clicks>
        <Leaderboard />
      </Page>
    </PageContainer>
  );
};

export default TeamPage;
