import * as graphql from "@nestjs/graphql";
import { PhlebotomistDetailsResolverBase } from "./base/phlebotomistDetails.resolver.base";
import { PhlebotomistDetails } from "./base/PhlebotomistDetails";
import { PhlebotomistDetailsService } from "./phlebotomistDetails.service";

@graphql.Resolver(() => PhlebotomistDetails)
export class PhlebotomistDetailsResolver extends PhlebotomistDetailsResolverBase {
  constructor(protected readonly service: PhlebotomistDetailsService) {
    super(service);
  }
}
