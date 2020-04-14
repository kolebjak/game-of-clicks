import Click from '../model/Click';
import getClick from './getClick';

export const create = async (team, session) => new Promise((resolve, reject) => {
  Click.create({ team, session }, (error, user) => {
    if (error) {
      reject(error);
    }
    resolve(user);
  });
});

export default async ({ team, session }) => {
  await create(team, session);
  return getClick({ team, session });
};