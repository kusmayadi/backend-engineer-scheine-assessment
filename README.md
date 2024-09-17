# Backend Engineer Scheine Assessment

## Setup & Installation

1. Copy file `.env.example` to `.env`
2. Change `.env` variables with your environment variables. If you are using Docker, you can put anything in `DB_` configuration, except `DB_HOST`.
3. If you are using docker:
    1. Start the server: `docker-compose up --build`.
    2. Run database migration: `docker-compose exec app npm run migration:run`. If you need to revert it, run: `docker-compose exec app npm run migration:revert`.
    3. For development, run seeder: `docker-compose exec app npm run seed:development`. It will seed doctors & patients data into database.
4. If you are not using docker:
    1. Start the server: `npm run dev`.
    2. Run database migration: `npm run migration:run`. If you need to revert it, run: `npm run migration:revert`.
    3. For development, run seeder: `npm run seed:development`. It will seed doctors & patients data into database.
5. `http://localhost:3000` is ready.
