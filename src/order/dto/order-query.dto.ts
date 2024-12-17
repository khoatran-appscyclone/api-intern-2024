import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { PaginationDto } from 'src/shared/dto/pagination.dto';

export enum SortOrderByQuery {
  TotalPrice = 'totalPrice',
  CreatedAt = 'createdAt',
  Quantity = 'quantity',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export class OrderQueryDto extends PaginationDto {
  @ApiPropertyOptional({
    description: 'Field to sort by (totalPrice, createdAt, quantity)',
    example: 'createdAt',
    enum: SortOrderByQuery,
  })
  @IsOptional()
  @IsString()
  @IsEnum(SortOrderByQuery)
  sortBy?: SortOrderByQuery;

  @ApiPropertyOptional({
    description: 'Sort order (asc or desc)',
    example: 'desc',
    enum: SortOrder,
  })
  @IsOptional()
  @IsString()
  @IsEnum(SortOrder)
  sortOrder?: SortOrder;

  @ApiPropertyOptional({
    description: 'Filter by exact customer name',
    example: '',
  })
  @IsOptional()
  @IsString()
  customerName?: string;
}
