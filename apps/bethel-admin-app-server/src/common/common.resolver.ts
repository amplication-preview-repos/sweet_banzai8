import * as graphql from "@nestjs/graphql";
import { CommonService } from "./common.service";

export class CommonResolver {
  constructor(protected readonly service: CommonService) {}
}
