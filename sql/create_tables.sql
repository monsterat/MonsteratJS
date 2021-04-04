DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password CHAR(60) NOT NULL,
    gender CHAR(1) NOT NULL,
    weight DECIMAL(6,2) NOT NULL,
    height DECIMAL(6,2) NOT NULL,
    dob DATE NOT NULL
);

DROP TABLE IF EXISTS tasks;

CREATE TABLE IF NOT EXISTS tasks (
    task_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    task_name VARCHAR(100) NOT NULL,
    deadline DATE NOT NULL,
    difficulty VARCHAR(50) NOT NULL,
    user_id INT NOT NULL,

    FOREIGN KEY(user_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
);

DROP TABLE IF EXISTS activities;

CREATE TABLE IF NOT EXISTS activities (
    activity_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    activity_name VARCHAR(50) NOT NULL,
    activity_duration INT NOT NULL,
    activity_date DATE NOT NULL,
    user_id INT NOT NULL,

    FOREIGN KEY(user_id)
    REFERENCES users(user_id)
    ON DELETE CASCADE
);