import Click from '../model/Click';

export default (req, res) => {
  Click.aggregate([
      { $group: { _id: '$team', team: { $first: '$team' }, clicks: { $sum: 1 } } },
      { $project: { _id: 0 } },
      { $sort: { clicks: -1 } },
    ],
    (err, clicks) => {
      if (err) return res.status(500).send('There is a problem.');
      res.status(200).send(clicks.map((c, i) => ({
        ...c,
        order: i + 1,
      })));
    });
};
