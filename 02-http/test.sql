CREATE TABLE user(
    name VARCHAR(50),
    mail VARCHAR(50),
    age INT
);

INSERT INTO user(name, mail, age) VALUES("Joey Clapton", "joeyclapton42@gmail.com", 23);
INSERT INTO user(name, mail, age) VALUES("Clara Nunes", "test@gmail.com", 18);
INSERT INTO user(name, mail, age) VALUES("Ana Bastos", "ana@gmail.com", 20);
INSERT INTO user(name, mail, age) VALUES("Daniela", "daniela@gmail.com", 25);
INSERT INTO user(name, mail, age) VALUES("Jorge Nunes", "test@gmail.com", 17);

SELECT * FROM user where age <= 20;

DELETE FROM user WHERE age <= 20;

UPDATE user SET mail = "danielazanette@gmail.com" WHERE name = "Daniela" ;
UPDATE user SET mail = "joeycmc@gmail.com", name = "Joey Clapton M B Santos" WHERE name = "Joey Clapton";

