import Click from '../model/Click';

const countSessionClicks = async ({session}) => await Click.find({session}).count();
const countTeamClicks = async ({team}) => await Click.find({team}).count();

export const create = (team, session) => new Promise((resolve, reject) => {
  Click.create({ team, session }, (error, user) => {
    if (error) {
      reject(error)
    }
    resolve(user);
  });
});

export default async (req, res) => {
  const { team, session } = req.body;

  const click = await create(team, session);
  if (!click) {
    res.status(500).send('There is a problem.');
    return;
  }
  const sessionCount = await countSessionClicks(click);
  if (!sessionCount) {
    res.status(500).send('There is a problem.');
    return;
  }

  const teamCount = await countTeamClicks(click);
  if (!teamCount) {
    res.status(500).send('There is a problem.');
    return;
  }

  res.status(200).send({
    'your_clicks': sessionCount,
    'team_clicks': teamCount,
  });
};