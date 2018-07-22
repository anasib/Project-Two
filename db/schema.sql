DROP DATABASE IF EXISTS leaderboard;

CREATE DATABASE leaderboard;
USE leaderboard;

CREATE TABLE Scores(
    name VARCHAR(10) NOT NULL DEFAULT 'Anonymous' PRIMARY KEY,
    score INT(5) NOT NULL DEFAULT '0',
    ts TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);