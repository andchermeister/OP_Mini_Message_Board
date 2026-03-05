const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 255 ),
    username VARCHAR ( 255 ),
    added DATE
);

INSERT INTO messages (text, username, added)
VALUES
    ('Hi there!', 'Amando', '2026-03-02'),
    ('Hello world!', 'Charles', '2026-05-02')`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://mini_message_board_db_i4sv_user:jrDoSLH2w8f2DSSpJKZavFDwKyh5Aqvf@dpg-d6iu7m4r85hc73et3aog-a.oregon-postgres.render.com/mini_message_board_db_i4sv",
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
