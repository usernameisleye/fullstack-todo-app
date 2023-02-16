CREATE DATABASE test;

CREATE TABLE testTable(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    user_name VARCHAR(255) 
);

-- Selecting All from testtable
SELECT * FROM testtable;

-- Insert into
INSERT INTO testtable(email) VALUES('adeleyeadesida@gmail.com');

-- Alter Table
ALTER TABLE testtable ADD COLUMN user_name VARCHAR(255);

-- Update user with id of 1
UPDATE testtable SET user_name = 'LEYE' WHERE id = 1;
