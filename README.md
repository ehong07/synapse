# SynapseVI

Transaction log application using SynapseFI API that encourages users to save by visualizing savings vs. expenses

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Sign up for SynapseFI account to receive client_id, client_secret, and fingerprint
Create .env file to store environmental variables

```
CLIENT_ID=YOUR_CLIENT_ID
CLIENT_SECRET=YOUR_CLIENT_SECRET
FINGERPRINT=YOUR_FINGERPRINT
```

### Installing

Install dependencies

```
npm install -g webpack
npm install
```

Start webpack and the server in separate terminal tabs

```
npm run react-dev
npm run server-dev
```

Open the application in your browser at localhost:8000

## Built With

* [React]
* [Node]
* [Express]
