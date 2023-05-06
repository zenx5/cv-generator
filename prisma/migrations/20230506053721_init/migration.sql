/*
  Warnings:

  - You are about to drop the `Jobs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Jobs";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "profetion" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Job" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "position" TEXT NOT NULL,
    "enterprise" TEXT NOT NULL,
    "fromDate" DATETIME NOT NULL,
    "toDate" DATETIME NOT NULL,
    "place" TEXT NOT NULL,
    "goals" TEXT NOT NULL,
    "person_id" INTEGER NOT NULL,
    CONSTRAINT "Job_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "show_rate" BOOLEAN NOT NULL,
    "show" BOOLEAN NOT NULL,
    "person_id" INTEGER NOT NULL,
    CONSTRAINT "Skill_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "show" BOOLEAN NOT NULL,
    "person_id" INTEGER NOT NULL,
    CONSTRAINT "Link_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Language" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "show" BOOLEAN NOT NULL,
    "person_id" INTEGER NOT NULL,
    CONSTRAINT "Language_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Hobbie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "show" BOOLEAN NOT NULL,
    "person_id" INTEGER NOT NULL,
    CONSTRAINT "Hobbie_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
