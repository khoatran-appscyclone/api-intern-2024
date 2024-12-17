import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { DiscountCodeService } from './discount-code.service';
import { CreateDiscountCodeDto } from './dto/create-discount-code.dto';
import { UpdateDiscountCodeDto } from './dto/update-discount-code.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DiscountCodeQueryDto } from './dto/discount-code-query.dto';
import { PrivateRouteUser } from 'src/shared/decorators/private-route.decorator';

@ApiTags('Discount Codes')
@Controller('discount-codes')
export class DiscountCodeController {
  constructor(private readonly discountCodeService: DiscountCodeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new discount code' })
  @ApiResponse({
    status: 201,
    description: 'Discount code successfully created.',
  })
  @PrivateRouteUser()
  async create(@Body() createDiscountCodeDto: CreateDiscountCodeDto) {
    return this.discountCodeService.create(createDiscountCodeDto);
  }

  @Get()
  @ApiOperation({
    summary:
      'Get all discount codes with pagination, search, filters, and sorting',
  })
  @ApiResponse({
    status: 200,
    description: 'List of discount codes with applied filters.',
  })
  @PrivateRouteUser()
  async findAll(@Query() query: DiscountCodeQueryDto) {
    return this.discountCodeService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a discount code by ID' })
  @ApiResponse({ status: 200, description: 'Discount code details.' })
  @ApiResponse({ status: 404, description: 'Discount code not found.' })
  @PrivateRouteUser()
  async findOne(@Param('id') id: string) {
    return this.discountCodeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a discount code' })
  @ApiResponse({
    status: 200,
    description: 'Discount code successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Discount code not found.' })
  @PrivateRouteUser()
  async update(
    @Param('id') id: string,
    @Body() updateDiscountCodeDto: UpdateDiscountCodeDto,
  ) {
    return this.discountCodeService.update(+id, updateDiscountCodeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a discount code' })
  @ApiResponse({
    status: 200,
    description: 'Discount code successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Discount code not found.' })
  @PrivateRouteUser()
  async remove(@Param('id') id: string) {
    return this.discountCodeService.remove(+id);
  }
}
