---
sidebar_position: 1
---

# Introduction

Let's install **Suta** on your local machine in a few steps.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Install Suta

Clone the repo to your local machine. Then `cd` into the directory.
```bash
git clone https://github.com/durocodes/suta
cd suta
```

## Setup

After cloning, run `npm i` to install the dependencies.

After this, edit the `.env.example` with your own settings and rename it to `.env`.

```bash title=".env"
DISCORD_TOKEN=<BOT TOKEN HERE>
DISCORD_OWNER=<YOUR DISCORD ID>
MONGO_URI=<MONGO URI>
PORT=<SERVER PORT>
```

## Start it up

`npm run start` will start the bot and api.

You can also run it directly from the command line with `tsc && node src/main.js`.