# On Point

> Geolocation-based Q&A. Ask and answer nearby questions in real-time

[![Stories in Ready](https://badge.waffle.io/canorouscrocodiles/thesis.svg?label=ready&title=Ready)](http://waffle.io/canorouscrocodiles/thesis)

SEE GIF HERE: http://i.imgur.com/nE1ib6Z.gifv


## Table of Contents

1. [Description](#description)
1. [Team](#team)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Description

On Point is a geolocation-based Q&A where users ask and answer nearby questions in real-time. This full-stack application was written using Node, Express, React, Redux, and PostgreSQL.

Ask a question and people within a 1/4 mile radius will hear that question immediately. See new questions as you move. Learn about the community around you!

## You can play with the app live here: [onpoint.me](onpoint.me)

![On Point Screenshot](http://i.imgur.com/tkQCZGN.png)

## Team

  - Keith Alpichi
  - Craig Rodrigues
  - Jong Kim

## Requirements

- Node 6.6.0
- PostgreSQL 9.6.2

## Development

- run `npm install` to install dependencies
- create an `.env` file within the root directory with the following key-value pairs
 - CLIENT_ID (for Facebook auth)
 - CLIENT_SECRET (a Facebook secret)
 - JWT_SECRET (your app secret)
 - TEST_DB_URL (for the test DB)
 - DEV_DB_URL (for the dev DB)
- run `psql -f server/db/sql/deb-dev.sql` to create and seed development DB tables

To run the application in development:

```sh
npm run dev-client // builds and watches client-side
npm run dev-server // runs and watches development server
```

### Roadmap

- [Waffle.io](http://waffle.io/canorouscrocodiles/thesis)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
