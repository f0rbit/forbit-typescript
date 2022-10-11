-- CreateEnum
CREATE TYPE "ACCESS_LEVEL" AS ENUM ('DEFAULT', 'MEMBER', 'PREMIUM', 'MODERATOR', 'ADMIN', 'ALL');

-- CreateEnum
CREATE TYPE "POST_STATUS" AS ENUM ('PUBLISHED', 'DRAFT', 'HIDDEN');

-- CreateEnum
CREATE TYPE "TECHNOLOGY" AS ENUM ('LANGUAGE', 'TOOL', 'ENVIRONMENT', 'DEPLOYMENT', 'SERVICE', 'DATABASE', 'PLATFORM');

-- CreateEnum
CREATE TYPE "PROJECT_STATUS" AS ENUM ('LIVE', 'FINISHED', 'RELEASED', 'DEVELOPMENT', 'PAUSED', 'STOPPED', 'ABANDONED');

-- CreateTable
CREATE TABLE "BlogUser" (
    "id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "access_level" "ACCESS_LEVEL" NOT NULL DEFAULT 'DEFAULT',
    "last_login_ip" TEXT,
    "last_login_date" TIMESTAMP(3),
    "creation_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlogUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "post_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "post_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "post_status" "POST_STATUS" NOT NULL DEFAULT 'DRAFT',
    "slug" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "cover_picture" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" SERIAL NOT NULL,
    "parent_cateogry" INTEGER,
    "category_name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "colour" VARCHAR(7) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Project" (
    "project_id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "description" TEXT NOT NULL,
    "repo_url" TEXT NOT NULL,
    "icon_url" TEXT NOT NULL,
    "status" "PROJECT_STATUS" NOT NULL DEFAULT 'DEVELOPMENT',
    "link_url" TEXT NOT NULL,
    "link_text" VARCHAR(20) NOT NULL,
    "hidden" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("project_id")
);

-- CreateTable
CREATE TABLE "Technology" (
    "tech_id" SERIAL NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "tech_group" "TECHNOLOGY" NOT NULL,

    CONSTRAINT "Technology_pkey" PRIMARY KEY ("tech_id")
);

-- CreateTable
CREATE TABLE "_CategoryToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ProjectToTechnology" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToPost_AB_unique" ON "_CategoryToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToPost_B_index" ON "_CategoryToPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTechnology_AB_unique" ON "_ProjectToTechnology"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTechnology_B_index" ON "_ProjectToTechnology"("B");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "BlogUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("post_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("project_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechnology" ADD CONSTRAINT "_ProjectToTechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "Technology"("tech_id") ON DELETE CASCADE ON UPDATE CASCADE;
