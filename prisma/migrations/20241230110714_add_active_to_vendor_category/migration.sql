-- AlterTable
ALTER TABLE `Category` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `Vendor` ADD COLUMN `active` BOOLEAN NOT NULL DEFAULT true;
