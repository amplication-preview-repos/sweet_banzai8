import * as graphql from "@nestjs/graphql";
import { TestService } from "./test.service";

export class TestResolver {
  constructor(protected readonly service: TestService) {}
}
