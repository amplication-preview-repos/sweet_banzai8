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
import { PatientAppointmentsWhereInput } from "./PatientAppointmentsWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PatientAppointmentsCountArgs {
  @ApiProperty({
    required: false,
    type: () => PatientAppointmentsWhereInput,
  })
  @Field(() => PatientAppointmentsWhereInput, { nullable: true })
  @Type(() => PatientAppointmentsWhereInput)
  where?: PatientAppointmentsWhereInput;
}

export { PatientAppointmentsCountArgs as PatientAppointmentsCountArgs };