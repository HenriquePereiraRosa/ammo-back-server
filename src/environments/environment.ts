// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const env = {
  production: true,
  mongoUrl: 'mongodb://admin:password8@ds149593.mlab.com:49593/mongdb-ammo-test',
  // mongoUrl: 'mongodb://localhost:27017/db',
  MONGO_DB_USER: 'admin',
  MONGO_DB_PASSWORD: 'password8'
};
