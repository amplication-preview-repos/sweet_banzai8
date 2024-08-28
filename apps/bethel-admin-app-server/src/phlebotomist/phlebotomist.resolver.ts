import * as graphql from "@nestjs/graphql";
import { PhlebotomistService } from "./phlebotomist.service";

export class PhlebotomistResolver {
  constructor(protected readonly service: PhlebotomistService) {}
}
