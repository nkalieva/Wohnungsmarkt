# WohnungsMarkt

A REST API backend for a WG room listing platform — users can browse and post shared apartment listings.

## What it does
- `GET /rooms` — retrieve all available room listings
- `POST /rooms` — add a new listing with title, price, size, location, and contact info

## Technologies
- **Node.js / Express** — REST API server
- **MongoDB / Mongoose** — database and schema
- **dotenv** — environment-based configuration

## Setup
```bash
npm install
# create .env with: MONGO_URI=your_mongodb_connection_string
npm run dev
```
