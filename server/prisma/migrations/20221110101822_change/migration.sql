-- AlterTable
ALTER TABLE "items" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
