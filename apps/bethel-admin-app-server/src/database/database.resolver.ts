import * as graphql from "@nestjs/graphql";
import { DatabaseService } from "./database.service";

export class DatabaseResolver {
  constructor(protected readonly service: DatabaseService) {}
}
