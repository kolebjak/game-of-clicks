import Click from '../model/Click';

const countSessionClicks = async (session) => await Click.find({session}).count();
const countTeamClicks = async (team) => await Click.find({team}).count();

export default async ({session, team}) => {
  const sessionCount = await countSessionClicks(session);
  const teamCount = await countTeamClicks(team);
  return {
    id: team,
    team,
    sessionCount,
    teamCount
  };
};