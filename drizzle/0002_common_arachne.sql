CREATE TABLE IF NOT EXISTS "suggestions" (
	"id" uuid DEFAULT gen_random_uuid(),
	"name" text NOT NULL,
	"description" text,
	"address" text NOT NULL
);
