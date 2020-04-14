import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom';
import { Row, Table } from './components/Table';

export const LEADERBOARD_QUERY = gql`
  query Leaderboard {
    leaderboard {
      id
      team
      teamCount
    }
  }
`;

const Leaderboard: React.FC = () => {
  const { teamName } = useParams();
  const { data, loading, error } = useQuery(LEADERBOARD_QUERY);

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Table cellPadding={0} cellSpacing={0}>
      <thead>
        <tr>
          <th />
          <th>Team</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        {data.leaderboard?.map((l: any, index: number) => (
          <Row key={index} selected={teamName === l.team}>
            <td>{index + 1}</td>
            <td>{l.team}</td>
            <td>{l.teamCount}</td>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

export default Leaderboard;
