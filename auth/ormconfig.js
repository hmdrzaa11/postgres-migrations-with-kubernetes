module.exports = {
  type: "postgres",
  host: "auth-pg-srv",
  port: 5432,
  database: "auth",
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  entities: ["**/*.entity.ts"],
  synchronize: false,
  //path to migrations
  migrations: ["src/migrations/**/*.ts"],
  cli: {
    migrationsDir: "src/migrations",
  },
};
