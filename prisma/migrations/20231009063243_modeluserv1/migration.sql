-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('USER', 'RECRUITER', 'ADMIN');

-- CreateTable
CREATE TABLE "user" (
    "id" STRING NOT NULL,
    "username" STRING,
    "email" STRING,
    "hashedPassword" STRING,
    "role" "UserRoles" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
