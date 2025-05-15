## Setting up database

create .env file

```bash
cp .env.example .env
```

generate and use JWT_SECRET

```bash
openssl rand -base64 64
```

copy and paste as `JWT_SECRET` variable into `.env`
