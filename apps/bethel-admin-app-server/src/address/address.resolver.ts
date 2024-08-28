import * as graphql from "@nestjs/graphql";
import { AddressService } from "./address.service";

export class AddressResolver {
  constructor(protected readonly service: AddressService) {}
}
