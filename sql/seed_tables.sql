INSERT INTO users(firstname, lastname, email, password, gender, weight, height, dob)
VALUES
('James', 'Bond', 'james.bond@gmail.com', crypt('HelloWorld123', gen_salt('bf')), 'M', 76, 183, '1990-03-01'),
('Tony', 'Stark', 'tony.stark@gmail.com', crypt('HelloWorld123', gen_salt('bf')), 'M', 70, 172, '1995-02-02'),
('Hermione', 'Granger', 'hermione.granger@gmail.com', crypt('HelloWorld123', gen_salt('bf')), 'F', 63, 165, '2000-01-03');

INSERT INTO activities(activity_name, activity_duration, activity_date, user_id)
VALUES
('Running', 60, '2021-04-01', 1),
('Swimming', 30, '2021-04-01', 1),
('Rock climbing', 120, '2021-04-01', 2),
('Surfing', 90, '2021-04-01', 2),
('Walking', 180, '2021-04-01', 3),
('Cycling', 90, '2021-04-01', 3);