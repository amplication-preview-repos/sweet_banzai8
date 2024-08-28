/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PhlebotomistDetails } from "./PhlebotomistDetails";
import { PhlebotomistDetailsCountArgs } from "./PhlebotomistDetailsCountArgs";
import { PhlebotomistDetailsFindManyArgs } from "./PhlebotomistDetailsFindManyArgs";
import { PhlebotomistDetailsFindUniqueArgs } from "./PhlebotomistDetailsFindUniqueArgs";
import { CreatePhlebotomistDetailsArgs } from "./CreatePhlebotomistDetailsArgs";
import { UpdatePhlebotomistDetailsArgs } from "./UpdatePhlebotomistDetailsArgs";
import { DeletePhlebotomistDetailsArgs } from "./DeletePhlebotomistDetailsArgs";
import { PhlebotomistDetailsService } from "../phlebotomistDetails.service";
@graphql.Resolver(() => PhlebotomistDetails)
export class PhlebotomistDetailsResolverBase {
  constructor(protected readonly service: PhlebotomistDetailsService) {}

  async _phlebotomistDetailsItemsMeta(
    @graphql.Args() args: PhlebotomistDetailsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PhlebotomistDetails])
  async phlebotomistDetailsItems(
    @graphql.Args() args: PhlebotomistDetailsFindManyArgs
  ): Promise<PhlebotomistDetails[]> {
    return this.service.phlebotomistDetailsItems(args);
  }

  @graphql.Query(() => PhlebotomistDetails, { nullable: true })
  async phlebotomistDetails(
    @graphql.Args() args: PhlebotomistDetailsFindUniqueArgs
  ): Promise<PhlebotomistDetails | null> {
    const result = await this.service.phlebotomistDetails(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PhlebotomistDetails)
  async createPhlebotomistDetails(
    @graphql.Args() args: CreatePhlebotomistDetailsArgs
  ): Promise<PhlebotomistDetails> {
    return await this.service.createPhlebotomistDetails({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => PhlebotomistDetails)
  async updatePhlebotomistDetails(
    @graphql.Args() args: UpdatePhlebotomistDetailsArgs
  ): Promise<PhlebotomistDetails | null> {
    try {
      return await this.service.updatePhlebotomistDetails({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PhlebotomistDetails)
  async deletePhlebotomistDetails(
    @graphql.Args() args: DeletePhlebotomistDetailsArgs
  ): Promise<PhlebotomistDetails | null> {
    try {
      return await this.service.deletePhlebotomistDetails(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}