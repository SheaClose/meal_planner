insert into users (access_token, expires_in) values ($1, $2) returning *;
