/*
  Warnings:

  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "_ProjectToTechnology" DROP CONSTRAINT "_ProjectToTechnology_A_fkey";

-- AlterTable
ALTER TABLE "Project" DROP CONSTRAINT "Project_pkey",
ALTER COLUMN "project_id" DROP DEFAULT,
ALTER COLUMN "project_id" SET DATA TYPE TEXT,
ALTER COLUMN "repo_url" DROP NOT NULL,
ALTER COLUMN "icon_url" DROP NOT NULL,
ALTER COLUMN "link_url" DROP NOT NULL,
ALTER COLUMN "link_text" DROP NOT NULL,
ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("project_id");
DROP SEQUENCE "Project_project_id_seq";

-- AlterTable
ALTER TABLE "_ProjectToTechnology" ALTER COLUMN "A" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("project_id") ON DELETE CASCADE ON UPDATE CASCADE;
