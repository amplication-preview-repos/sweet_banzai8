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
import { AppointmentDetailsWhereInput } from "./AppointmentDetailsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AppointmentDetailsOrderByInput } from "./AppointmentDetailsOrderByInput";

@ArgsType()
class AppointmentDetailsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AppointmentDetailsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AppointmentDetailsWhereInput, { nullable: true })
  @Type(() => AppointmentDetailsWhereInput)
  where?: AppointmentDetailsWhereInput;

  @ApiProperty({
    required: false,
    type: [AppointmentDetailsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AppointmentDetailsOrderByInput], { nullable: true })
  @Type(() => AppointmentDetailsOrderByInput)
  orderBy?: Array<AppointmentDetailsOrderByInput>;

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

export { AppointmentDetailsFindManyArgs as AppointmentDetailsFindManyArgs };
