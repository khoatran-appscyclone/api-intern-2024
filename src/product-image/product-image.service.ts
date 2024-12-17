import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';

@Injectable()
export class ProductImageService {
  constructor(private readonly prisma: PrismaService) {}

  // Add a new image to a product
  async addImage(createImageDto: CreateProductImageDto) {
    const { productId, url } = createImageDto;

    // Check if the product exists
    const product = await this.prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return this.prisma.productImage.create({
      data: {
        url,
        productId,
      },
    });
  }

  // Update an existing product image
  async updateImage(imageId: number, updateImageDto: UpdateProductImageDto) {
    const image = await this.prisma.productImage.findUnique({
      where: { id: imageId },
    });
    if (!image) {
      throw new NotFoundException('Product image not found');
    }

    return this.prisma.productImage.update({
      where: { id: imageId },
      data: {
        ...updateImageDto,
      },
    });
  }

  // Delete a product image
  async deleteImage(imageId: number) {
    const image = await this.prisma.productImage.findUnique({
      where: { id: imageId },
    });
    if (!image) {
      throw new NotFoundException('Product image not found');
    }

    return this.prisma.productImage.delete({
      where: { id: imageId },
    });
  }

  // Fetch all images for a product
  async getImagesByProduct(productId: number) {
    return this.prisma.productImage.findMany({
      where: { productId },
    });
  }
}
