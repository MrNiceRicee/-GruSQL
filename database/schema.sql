CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS "Users"(
  _id UUID DEFAULT uuid_generate_v4() NOT NULL,
  name VARCHAR(26),
  "publicId" SERIAL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY (_id)
)