/*
  Warnings:

  - You are about to drop the `ShoppingCart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ShoppingCart" DROP CONSTRAINT "ShoppingCart_orderId_fkey";

-- DropForeignKey
ALTER TABLE "ShoppingCart" DROP CONSTRAINT "ShoppingCart_productId_fkey";

-- DropTable
DROP TABLE "ShoppingCart";

-- CreateTable
CREATE TABLE "_OrderToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OrderToProduct_AB_unique" ON "_OrderToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderToProduct_B_index" ON "_OrderToProduct"("B");

-- AddForeignKey
ALTER TABLE "_OrderToProduct" ADD CONSTRAINT "_OrderToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToProduct" ADD CONSTRAINT "_OrderToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
