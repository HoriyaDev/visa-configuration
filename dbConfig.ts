import 'dotenv/config';
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const pgConfig: PostgresConnectionOptions = {
  url: process.env.DATABASE_URL,
  type: 'postgres',
  port: 5432,
 entities: [__dirname + '/**/*.entity.{ts,js}'],
  synchronize: true,
  logging: true
};