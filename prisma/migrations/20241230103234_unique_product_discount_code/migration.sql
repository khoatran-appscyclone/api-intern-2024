/*
  Warnings:

  - A unique constraint covering the columns `[discountCodeId,productId]` on the table `ProductDiscountCodes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `ProductDiscountCodes_discountCodeId_productId_key` ON `ProductDiscountCodes`(`discountCodeId`, `productId`);
