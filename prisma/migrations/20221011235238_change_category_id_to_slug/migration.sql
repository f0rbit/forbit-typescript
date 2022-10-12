/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `parent_cateogry` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToPost" DROP CONSTRAINT "_CategoryToPost_A_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "parent_cateogry",
ADD COLUMN     "parent_slug" TEXT,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("slug");

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("slug") ON DELETE CASCADE ON UPDATE CASCADE;
