import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsIn, IsNumber, Min } from 'class-validator';

export class ProductQueryDto {
  @ApiPropertyOptional({
    description: 'Page number for pagination',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Number of items per page', example: 10 })
  @IsOptional()
  @IsNumber()
  @Min(1)
  limit?: number;

  @ApiPropertyOptional({
    description: 'Field to sort by (price or createdAt)',
    example: 'price',
  })
  @IsOptional()
  @IsString()
  @IsIn(['price', 'createdAt'])
  sortBy?: string;

  @ApiPropertyOptional({
    description: 'Sort order (asc or desc)',
    example: 'desc',
  })
  @IsOptional()
  @IsString()
  @IsIn(['asc', 'desc'])
  sortOrder?: string;

  @ApiPropertyOptional({
    description: 'Search products by name (case insensitive)',
    example: 'Laptop',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Filter by vendor ID', example: 1 })
  @IsOptional()
  @IsNumber()
  vendorId?: number;

  @ApiPropertyOptional({ description: 'Filter by category ID', example: 2 })
  @IsOptional()
  @IsNumber()
  categoryId?: number;
}
