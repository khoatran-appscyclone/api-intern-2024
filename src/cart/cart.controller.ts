import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';

@ApiTags('Carts')
@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('/add')
  @ApiOperation({ summary: 'Add item to cart' })
  @ApiResponse({ status: 201, description: 'Cart successfully created.' })
  async create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get(':customerId')
  @ApiOperation({ summary: 'Get a cart by customerId' })
  @ApiResponse({ status: 200, description: 'Cart details.' })
  @ApiResponse({ status: 404, description: 'Cart not found.' })
  async findOne(@Param('customerId') customerId: string) {
    return this.cartService.findByCustomerId(+customerId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a item of cart by id' })
  @ApiResponse({ status: 200, description: 'Cart successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Cart not found.' })
  async remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}
