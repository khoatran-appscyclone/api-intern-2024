import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsOptional,
  IsString,
  IsBoolean,
  IsInt,
  IsEnum,
  Min,
} from 'class-validator';

export enum DiscountCodeSortBy {
  CREATED_AT = 'createdAt',
  MIN_AMOUNT = 'minAmount',
}

export class DiscountCodeQueryDto {
  @ApiPropertyOptional({
    description: 'Page number for pagination',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  page?: number;

  @ApiPropertyOptional({ description: 'Number of items per page', example: 10 })
  @IsOptional()
  @IsInt()
  @Min(1)
  limit?: number;

  @ApiPropertyOptional({
    description: 'Search discount codes by code',
    example: 'SUMMER2024',
  })
  @IsOptional()
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    description: 'Filter by active status',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiPropertyOptional({
    description: 'Sort by field (createdAt or minAmount)',
    example: 'createdAt',
    enum: DiscountCodeSortBy,
  })
  @IsOptional()
  @IsEnum(DiscountCodeSortBy)
  sortBy?: DiscountCodeSortBy;

  @ApiPropertyOptional({
    description: 'Sort order (asc or desc)',
    example: 'desc',
    enum: ['asc', 'desc'],
  })
  @IsOptional()
  @IsString()
  sortOrder?: 'asc' | 'desc';
}
