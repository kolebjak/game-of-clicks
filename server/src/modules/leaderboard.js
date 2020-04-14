import Click from '../model/Click';

export default async () =>
  Click.aggregate([
    {$group: {_id: '$team', id: {$first: '$team'}, team: {$first: '$team'}, teamCount: {$sum: 1}}},
    {$sort: {teamCount: -1}},
    { $limit : 10 }
  ]);

