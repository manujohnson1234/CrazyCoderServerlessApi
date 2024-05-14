const express = require('express');
const leetcodeDailyChallenge = require('../controller/dailyChallengeController');

const dailyChallengesRouter = express.Router();

dailyChallengesRouter.get('/leetcode', leetcodeDailyChallenge);

module.exports = dailyChallengesRouter;