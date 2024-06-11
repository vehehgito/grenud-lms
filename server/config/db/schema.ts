// userid : uuid, name : varchar(255), email : varchar(255), passwordhash varchar(255), user_role varchar(255), created_on timestamp, courses_enrolled : ??
import { sql } from "drizzle-orm";
import { uuid, varchar, timestamp, pgTable } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    user_id: uuid('user_id').default(sql`gen_random_uuid()`).primaryKey(),
    name: varchar('name', {length: 255}).notNull(),
    email: varchar('email', {length: 255}).notNull(),
    password_hash: varchar('password_hash', {length: 255}).notNull(),
    user_role: varchar('user_role', {length: 255}).notNull(),
    created_on: timestamp('created_on').default(sql`now()`),
});