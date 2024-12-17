import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUrl } from 'class-validator';

export class CreateProductImageDto {
  @ApiProperty({ description: 'Product ID', example: 1 })
  @IsInt()
  productId: number;

  @ApiProperty({
    description: 'Image URL',
    example: 'https://example.com/image1.jpg',
  })
  @IsString()
  @IsUrl()
  url: string;
}
