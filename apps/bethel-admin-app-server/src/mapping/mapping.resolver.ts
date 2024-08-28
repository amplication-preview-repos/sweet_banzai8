import * as graphql from "@nestjs/graphql";
import { MappingService } from "./mapping.service";

export class MappingResolver {
  constructor(protected readonly service: MappingService) {}
}
