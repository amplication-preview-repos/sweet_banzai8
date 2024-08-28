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
import { PatientDetailsWhereInput } from "./PatientDetailsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PatientDetailsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PatientDetailsWhereInput,
  })
  @ValidateNested()
  @Type(() => PatientDetailsWhereInput)
  @IsOptional()
  @Field(() => PatientDetailsWhereInput, {
    nullable: true,
  })
  every?: PatientDetailsWhereInput;

  @ApiProperty({
    required: false,
    type: () => PatientDetailsWhereInput,
  })
  @ValidateNested()
  @Type(() => PatientDetailsWhereInput)
  @IsOptional()
  @Field(() => PatientDetailsWhereInput, {
    nullable: true,
  })
  some?: PatientDetailsWhereInput;

  @ApiProperty({
    required: false,
    type: () => PatientDetailsWhereInput,
  })
  @ValidateNested()
  @Type(() => PatientDetailsWhereInput)
  @IsOptional()
  @Field(() => PatientDetailsWhereInput, {
    nullable: true,
  })
  none?: PatientDetailsWhereInput;
}
export { PatientDetailsListRelationFilter as PatientDetailsListRelationFilter };
