# Pusher App Server

This is a small express app with pusher auth integrated.

## Getting started

1. Create an account at [pusher.com](https://pusher.com/), and make a note of your `app_id`, `app_key`, `app_secret` and `app_cluster`.
2. Deploy to Heroku with Heroku Button
3. Add `app_id`, `app_key`, `app_secret` and `app_cluster` as environment variables in Heroku app.
4. Pass generated Heroku app url in client Pusher instantiation option `authEndpoint`.
5. Subscribe to `private-*` channel from client.
6. Done.
