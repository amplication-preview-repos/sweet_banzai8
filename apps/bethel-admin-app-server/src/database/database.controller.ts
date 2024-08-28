import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DatabaseService } from "./database.service";

@swagger.ApiTags("databases")
@common.Controller("databases")
export class DatabaseController {
  constructor(protected readonly service: DatabaseService) {}
}
