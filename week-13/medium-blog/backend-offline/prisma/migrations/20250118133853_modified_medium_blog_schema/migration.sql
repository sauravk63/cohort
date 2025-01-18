-- CreateTable
CREATE TABLE "Medium_Blog_User" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "pasword" TEXT,
    "email" TEXT,

    CONSTRAINT "Medium_Blog_User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medium_Blog_Posts" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Medium_Blog_Posts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Medium_Blog_User_username_key" ON "Medium_Blog_User"("username");

-- AddForeignKey
ALTER TABLE "Medium_Blog_Posts" ADD CONSTRAINT "Medium_Blog_Posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Medium_Blog_User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
