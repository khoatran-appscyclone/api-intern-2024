import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsInt, Min, Max } from 'class-validator';
import { PaginationDto } from 'src/shared/dto/pagination.dto';

export class ReviewQueryDto extends PaginationDto {
  @Type(() => Number)
  @ApiPropertyOptional({
    description: 'Filter reviews by rating (1-5)',
    example: 5,
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  rating?: number;
}
