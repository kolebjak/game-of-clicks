import Click from '../model/Click';

export default async () =>
    Click.aggregate([
            {$group: {_id: '$team', team: {$first: '$team'}, clicks: {$sum: 1}}},
            {$project: {_id: 0}},
            {$sort: {clicks: -1}},
        ],
        (err, clicks) => {
            clicks.map((c, i) => ({
                ...c,
                order: i + 1,
            }))
        });

