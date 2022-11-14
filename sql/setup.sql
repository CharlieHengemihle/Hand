-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS dwarves;
DROP TABLE IF EXISTS elves;
DROP TABLE IF EXISTS goblins;
DROP TABLE IF EXISTS humans;

CREATE TABLE dwarves (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  purpose VARCHAR NOT NULL,
  source VARCHAR NOT NULL,
  url VARCHAR NOT NULL
);

CREATE TABLE elves (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  purpose VARCHAR NOT NULL,
  source VARCHAR NOT NULL,
  url VARCHAR NOT NULL
);

CREATE TABLE goblins (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  purpose VARCHAR NOT NULL,
  source VARCHAR NOT NULL,
  url VARCHAR NOT NULL
);

CREATE TABLE humans (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  purpose VARCHAR NOT NULL,
  source VARCHAR NOT NULL,
  url VARCHAR NOT NULL
);

INSERT INTO dwarves (name, purpose, source, url)
VALUES
('Gimli', 'Lord of the Glittering Caves', 'Middle Earth', 'https://hero.fandom.com/wiki/Gimli'),
('Balin', 'Lord of Moria', 'Middle Earth', 'https://hero.fandom.com/wiki/Balin'),
('Scout', 'Place flares and reach high places', 'Deep Rock Galactic', 'https://deeprockgalactic.fandom.com/wiki/Dwarves'),
('Driller', 'Use titanium drills and explosives to clear the way', 'Deep Rock Galactic', 'https://deeprockgalactic.fandom.com/wiki/Dwarves'),
('Yagrum Bagran', 'Master Crafter', 'Corprusarium Bowels', 'https://elderscrolls.fandom.com/wiki/Yagrum_Bagarn_(Morrowind)');



INSERT INTO elves (name, purpose, source, url)
VALUES
('Legolas Greenleaf', 'Prince of the Woodland Realm', 'Middle Earth', 'https://lotr.fandom.com/wiki/Legolas'),
('Celebrimbor', 'Lord of the Gwaith-i-Mírdain', 'Middle Earth', 'https://lotr.fandom.com/wiki/Celebrimbor'),
('Ernest J. Keebler', 'Head Elf', 'The Hollow Tree Factory', 'https://en.wikipedia.org/wiki/Keebler_Company#Keebler_Elves'),
('Remallia Haventree', 'Lead Delegate of the Harpers', 'Waterdeep', 'https://forgottenrealms.fandom.com/wiki/Remallia_Haventree'),
('Kiaransalee', 'Lady of the Dead', 'Threnody', 'https://forgottenrealms.fandom.com/wiki/Kiaransalee');



INSERT INTO goblins (name, purpose, source, url)
VALUES
('John Goblikon', 'Nekrogoblikon hype man', 'Los Angeles, California', 'https://twitter.com/johngoblikon?lang=en'),
('Monte Gazlow', 'Trade Prince of the Bilgewater Cartel', 'Booty Bay', 'https://wowpedia.fandom.com/wiki/Monte_Gazlowe'),
('Abrianna Mirimm', 'Skysybil', 'Rosohna', 'https://criticalrole.fandom.com/wiki/Abrianna_Mirimm'),
('Riz "The Ball" Gukgak', 'Student', 'Aguefort Adventuring Academy', 'https://dimension20.fandom.com/wiki/Riz_Gukgak'),
('Robin Redcap', 'Familiar to William de Soules', 'Scotland', 'https://mythnerd.com/famous-goblins/');


INSERT INTO humans (name, purpose, source, url)
VALUES
('Finn Mertens', 'The Last Human', 'Land of Ooo', 'https://adventuretime.fandom.com/wiki/Finn'),
('Thomas A. Anderson', 'Free Humanity from the Matrix', 'Lower Downtown, Capital City, USA', 'https://en.wikipedia.org/wiki/Neo_(The_Matrix)'),
('Earnest Marks', 'Manage the ascencion of Paper Boi', 'Atlanta, Georgia', 'https://en.wikipedia.org/wiki/Atlanta_(TV_series)'),
('Elendil', 'High King of the Dúnedain', 'Númenor', 'https://lotr.fandom.com/wiki/Elendil'),
('Richard Stink', 'Harbinger of Seasonal Scents', 'Huntington, West Virginia', 'https://mbmbam.fandom.com/wiki/Richard_Stink');

-- DROP TABLE IF EXISTS monsters;

-- CREATE TABLE monsters (
--   id BIGINT GENERATED ALWAYS AS IDENTITY,
--   name VARCHAR NOT NULL,
--   purpose VARCHAR NOT NULL,
--   source VARCHAR NOT NULL,
--   url VARCHAR NOT NULL
-- );

-- INSERT INTO monsters (name, purpose, source, url)
-- VALUES
-- ('Legolas Greenleaf', 'Prince of the Woodland Realm', 'Middle Earth', 'https://lotr.fandom.com/wiki/Legolas'),
-- ('Celebrimbor', 'Lord of the Gwaith-i-Mírdain', 'Middle Earth', 'https://lotr.fandom.com/wiki/Celebrimbor'),
-- ('Ernest J. Keebler', 'Head Elf', 'The Hollow Tree Factory', 'https://en.wikipedia.org/wiki/Keebler_Company#Keebler_Elves'),
-- ('Remallia Haventree', 'Lead Delegate of the Harpers', 'Waterdeep', 'https://forgottenrealms.fandom.com/wiki/Remallia_Haventree'),
-- ('Kiaransalee', 'Lady of the Dead', 'Threnody', 'https://forgottenrealms.fandom.com/wiki/Kiaransalee');