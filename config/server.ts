export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', env('DATABASE_PORT')),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
