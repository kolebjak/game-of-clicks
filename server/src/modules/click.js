import Click from '../model/Click';

const countSessionClicks = async ({session}) => await Click.find({session}).count();
const countTeamClicks = async ({team}) => await Click.find({team}).count();

export const create = async (team, session) => new Promise((resolve, reject) => {
  Click.create({ team, session }, (error, user) => {
    if (error) {
      reject(error)
    }
    resolve(user);
  });
});

export default async ({ team, session }) => {
  const click = await create(team, session);
  const sessionCount = await countSessionClicks(click);
  const teamCount = await countTeamClicks(click);

  return {
    team,
    session,
    count: {
      session: sessionCount,
      team: teamCount
    }
  }
};