-- CreateTable
CREATE TABLE "token" (
    "id" SERIAL NOT NULL,
    "hash" VARCHAR(256) NOT NULL,
    "username" VARCHAR(150) NOT NULL,

    CONSTRAINT "token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "token_hash_key" ON "token"("hash");

-- CreateIndex
CREATE UNIQUE INDEX "token_username_key" ON "token"("username");
