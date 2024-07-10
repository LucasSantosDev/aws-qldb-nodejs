## QLDB + Node.JS

<img src="https://newrelic.com/sites/default/files/quickstarts/images/icons/aws-qldb--logo.svg" alt="Logo do QLDB" width="180px" />

<img src="https://i.pinimg.com/originals/cd/12/12/cd1212c949eb07ebdd18db8f8cbb350b.png" alt="Logo do Node.JS" width="180px" />

<br />

> Assista esse video para entender como usar o QLDB:

[![AWS Summit SP 2022](https://img.youtube.com/vi/4liVGyLghT4/0.jpg)](https://www.youtube.com/watch?v=4liVGyLghT4)

---

### Example response lambda

```json
{
  "statusCode": 200,
  "body": {
    "message": "QLDB operations completed successfully!",
    "data": [
      { "FirstName": "Lucas 0.9036597422764843", "LastName": "Santos" },
      { "LastName": "Santos", "FirstName": "Lucas atualizado" },
      { "FirstName": "Lucas 0.9407893008807109", "LastName": "Santos" },
      { "FirstName": "Lucas 0.7275625410495878", "LastName": "Santos" },
      { "FirstName": "Lucas", "LastName": "Santos" },
      { "FirstName": "Lucas 0.8778286409511125", "LastName": "Santos" }
    ],
    "history": [
      {
        "blockAddress": {
          "strandId": "EQGFfMfB3y8CqSnF1pOwMH",
          "sequenceNo": 181
        },
        "hash": "r2PhdRoq5YJLZOElnhWKV5PZGYHDgUjuu/bKjTN3TqY=",
        "data": {
          "FirstName": "Lucas 0.9813905700931809",
          "LastName": "Santos"
        },
        "metadata": {
          "id": "77oAJTfS5FoJcntEtnjg4T",
          "version": 0,
          "txTime": "2024-07-09T19:47:45.264Z",
          "txId": "543Zn2RJH9A5cIcjqLZCtt"
        }
      },
      {
        "blockAddress": {
          "strandId": "EQGFfMfB3y8CqSnF1pOwMH",
          "sequenceNo": 203
        },
        "hash": "BIYwLEk1VEqLLaBrH5iKm4bI/7tIIHEsMJUyxGRiUPw=",
        "data": { "LastName": "Santos", "FirstName": "Lucas atualizado" },
        "metadata": {
          "id": "77oAJTfS5FoJcntEtnjg4T",
          "version": 1,
          "txTime": "2024-07-09T19:56:43.830Z",
          "txId": "BVHPvPXLaftI8owHCQccrY"
        }
      }
    ]
  }
}
```

---

#### Links úteis:

> Artigo de como usar o QLDB com nodejs

```bash
https://codestax.medium.com/getting-started-with-aws-quantum-ledger-database-418b52aadbeb
```

> Documentação da AWS sobre como usar QLDB e Nodejs

```bash
https://docs.aws.amazon.com/qldb/latest/developerguide/driver-cookbook-nodejs.html#cookbook-nodejs.crud.inserting
```

> AWS Summit SP 2022 sobre QLDB

```bash
https://www.youtube.com/watch?v=4liVGyLghT4
```
