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
import { AppointmentDetailsWhereUniqueInput } from "./AppointmentDetailsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AppointmentDetailsUpdateInput } from "./AppointmentDetailsUpdateInput";

@ArgsType()
class UpdateAppointmentDetailsArgs {
  @ApiProperty({
    required: true,
    type: () => AppointmentDetailsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppointmentDetailsWhereUniqueInput)
  @Field(() => AppointmentDetailsWhereUniqueInput, { nullable: false })
  where!: AppointmentDetailsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AppointmentDetailsUpdateInput,
  })
  @ValidateNested()
  @Type(() => AppointmentDetailsUpdateInput)
  @Field(() => AppointmentDetailsUpdateInput, { nullable: false })
  data!: AppointmentDetailsUpdateInput;
}

export { UpdateAppointmentDetailsArgs as UpdateAppointmentDetailsArgs };
