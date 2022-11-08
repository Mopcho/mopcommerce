-- CreateTable
CREATE TABLE "items" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "items_id_key" ON "items"("id");
