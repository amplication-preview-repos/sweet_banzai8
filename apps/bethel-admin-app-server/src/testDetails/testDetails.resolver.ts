import * as graphql from "@nestjs/graphql";
import { TestDetailsResolverBase } from "./base/testDetails.resolver.base";
import { TestDetails } from "./base/TestDetails";
import { TestDetailsService } from "./testDetails.service";

@graphql.Resolver(() => TestDetails)
export class TestDetailsResolver extends TestDetailsResolverBase {
  constructor(protected readonly service: TestDetailsService) {
    super(service);
  }
}
