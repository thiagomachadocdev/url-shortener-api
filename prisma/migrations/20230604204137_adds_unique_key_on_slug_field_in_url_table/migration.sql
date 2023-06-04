/*
  Warnings:

  - A unique constraint covering the columns `[Slug]` on the table `Url` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Url_Slug_key" ON "Url"("Slug");
