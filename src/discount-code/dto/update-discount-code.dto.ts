import { OmitType, PickType } from '@nestjs/swagger';
import { CreateDiscountCodeDto } from './create-discount-code.dto';

export class UpdateDiscountCodeDto extends OmitType(CreateDiscountCodeDto, [
  'productIds',
]) {}

export class UpdateProductDiscountCodeDto extends PickType(
  CreateDiscountCodeDto,
  ['productIds'],
) {}
