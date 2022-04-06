# How to use

We have 2 endpoints here.
GET => localhost:3000/auth/qr-code => To get a QR Code and base32 that we will use in google authentication

```bash
curl -X 'GET' 'http://localhost:3000/auth/qr-code' -H 'accept: */*'
```

POST => localhost:3000/auth/validate/ => To validate our token with our base32

```bash
curl -d '{ "token": "token_input_here" }' -X 'POST' 'http://localhost:3000/auth/validate' -H 'accept: */*'
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Stay in touch

- Author - Albert
- Instagram @albertb8

