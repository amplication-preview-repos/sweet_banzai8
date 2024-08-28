import * as graphql from "@nestjs/graphql";
import { AddressDetailsResolverBase } from "./base/addressDetails.resolver.base";
import { AddressDetails } from "./base/AddressDetails";
import { AddressDetailsService } from "./addressDetails.service";

@graphql.Resolver(() => AddressDetails)
export class AddressDetailsResolver extends AddressDetailsResolverBase {
  constructor(protected readonly service: AddressDetailsService) {
    super(service);
  }
}
