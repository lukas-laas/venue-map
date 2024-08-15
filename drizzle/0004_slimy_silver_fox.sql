ALTER TABLE "suggestions" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "suggestions" ALTER COLUMN "id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "venues" ADD PRIMARY KEY ("id");--> statement-breakpoint
ALTER TABLE "venues" ALTER COLUMN "id" SET NOT NULL;