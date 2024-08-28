/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PatientTestsWhereInput } from "./PatientTestsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PatientTestsOrderByInput } from "./PatientTestsOrderByInput";

@ArgsType()
class PatientTestsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PatientTestsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PatientTestsWhereInput, { nullable: true })
  @Type(() => PatientTestsWhereInput)
  where?: PatientTestsWhereInput;

  @ApiProperty({
    required: false,
    type: [PatientTestsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PatientTestsOrderByInput], { nullable: true })
  @Type(() => PatientTestsOrderByInput)
  orderBy?: Array<PatientTestsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PatientTestsFindManyArgs as PatientTestsFindManyArgs };