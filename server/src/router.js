import express from 'express';
import bodyParser from 'body-parser';
import click from './modules/click';
import leaderboard from './modules/leaderboard';

const router = express.Router();
router.use(bodyParser.json());

router.get('/api/leaderboard', leaderboard);
router.post('/api/click', click);

export default router;
