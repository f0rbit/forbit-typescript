/*
  Warnings:

  - The primary key for the `Technology` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tech_id` on the `Technology` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProjectToTechnology" DROP CONSTRAINT "_ProjectToTechnology_B_fkey";

-- AlterTable
ALTER TABLE "Technology" DROP CONSTRAINT "Technology_pkey",
DROP COLUMN "tech_id",
ADD CONSTRAINT "Technology_pkey" PRIMARY KEY ("name");

-- AlterTable
ALTER TABLE "_ProjectToTechnology" ALTER COLUMN "B" SET DATA TYPE VARCHAR(20);

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "Technology"("name") ON DELETE CASCADE ON UPDATE CASCADE;
