module.exports = {
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgresql://neondb_owner:npg_w0BGuXNK9Fsk@ep-orange-forest-axkzyc50-pooler.c-4.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};