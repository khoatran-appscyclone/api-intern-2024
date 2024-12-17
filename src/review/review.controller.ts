import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ReviewQueryDto } from './dto/review-query.dto';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product review' })
  @ApiResponse({ status: 201, description: 'Review successfully created.' })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or duplicate review.',
  })
  async createReview(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.createReview(createReviewDto);
  }

  @Get('product/:productId')
  @ApiOperation({
    summary:
      'Get reviews for a product with pagination, rating filter, average rating, and rating count',
  })
  @ApiResponse({
    status: 200,
    description: 'List of reviews with rating summary.',
  })
  async getReviewsByProduct(
    @Param('productId') productId: string,
    @Query() query: ReviewQueryDto,
  ) {
    return this.reviewService.getReviewsByProduct(+productId, query);
  }

  @Get('customer')
  @ApiOperation({ summary: 'Get all reviews submitted by a customer' })
  @ApiResponse({ status: 200, description: 'List of reviews by the customer.' })
  async getReviewsByCustomer(@Query('customerId') customerId: number) {
    return this.reviewService.findReviewsByCustomer(+customerId);
  }
}
