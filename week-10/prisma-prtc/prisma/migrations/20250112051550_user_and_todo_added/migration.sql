-- CreateTable
CREATE TABLE "UserTable" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "lastname" TEXT,
    "password" TEXT NOT NULL,
    "phoneno" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "UserTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTable_email_key" ON "UserTable"("email");
