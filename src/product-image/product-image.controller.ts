import {
  Controller,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Get,
} from '@nestjs/common';
import { ProductImageService } from './product-image.service';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { UpdateProductImageDto } from './dto/update-product-image.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Product Images')
@Controller('product-images')
export class ProductImageController {
  constructor(private readonly productImageService: ProductImageService) {}

  @Post()
  @ApiOperation({ summary: 'Add a new image to a product' })
  @ApiResponse({ status: 201, description: 'Product image added successfully' })
  async addImage(@Body() createImageDto: CreateProductImageDto) {
    return this.productImageService.addImage(createImageDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing product image' })
  @ApiResponse({
    status: 200,
    description: 'Product image updated successfully',
  })
  async updateImage(
    @Param('id') id: string,
    @Body() updateImageDto: UpdateProductImageDto,
  ) {
    return this.productImageService.updateImage(+id, updateImageDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product image' })
  @ApiResponse({
    status: 200,
    description: 'Product image deleted successfully',
  })
  async deleteImage(@Param('id') id: string) {
    return this.productImageService.deleteImage(+id);
  }

  @Get('product/:productId')
  @ApiOperation({ summary: 'Get all images for a product' })
  @ApiResponse({ status: 200, description: 'List of product images' })
  async getImages(@Param('productId') productId: string) {
    return this.productImageService.getImagesByProduct(+productId);
  }
}
