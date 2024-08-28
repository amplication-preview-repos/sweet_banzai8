/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TestDetailsWhereInput } from "./TestDetailsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TestDetailsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TestDetailsWhereInput,
  })
  @ValidateNested()
  @Type(() => TestDetailsWhereInput)
  @IsOptional()
  @Field(() => TestDetailsWhereInput, {
    nullable: true,
  })
  every?: TestDetailsWhereInput;

  @ApiProperty({
    required: false,
    type: () => TestDetailsWhereInput,
  })
  @ValidateNested()
  @Type(() => TestDetailsWhereInput)
  @IsOptional()
  @Field(() => TestDetailsWhereInput, {
    nullable: true,
  })
  some?: TestDetailsWhereInput;

  @ApiProperty({
    required: false,
    type: () => TestDetailsWhereInput,
  })
  @ValidateNested()
  @Type(() => TestDetailsWhereInput)
  @IsOptional()
  @Field(() => TestDetailsWhereInput, {
    nullable: true,
  })
  none?: TestDetailsWhereInput;
}
export { TestDetailsListRelationFilter as TestDetailsListRelationFilter };
