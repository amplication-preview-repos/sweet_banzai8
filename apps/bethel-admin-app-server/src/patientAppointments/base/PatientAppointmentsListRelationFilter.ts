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
import { PatientAppointmentsWhereInput } from "./PatientAppointmentsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PatientAppointmentsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PatientAppointmentsWhereInput,
  })
  @ValidateNested()
  @Type(() => PatientAppointmentsWhereInput)
  @IsOptional()
  @Field(() => PatientAppointmentsWhereInput, {
    nullable: true,
  })
  every?: PatientAppointmentsWhereInput;

  @ApiProperty({
    required: false,
    type: () => PatientAppointmentsWhereInput,
  })
  @ValidateNested()
  @Type(() => PatientAppointmentsWhereInput)
  @IsOptional()
  @Field(() => PatientAppointmentsWhereInput, {
    nullable: true,
  })
  some?: PatientAppointmentsWhereInput;

  @ApiProperty({
    required: false,
    type: () => PatientAppointmentsWhereInput,
  })
  @ValidateNested()
  @Type(() => PatientAppointmentsWhereInput)
  @IsOptional()
  @Field(() => PatientAppointmentsWhereInput, {
    nullable: true,
  })
  none?: PatientAppointmentsWhereInput;
}
export { PatientAppointmentsListRelationFilter as PatientAppointmentsListRelationFilter };