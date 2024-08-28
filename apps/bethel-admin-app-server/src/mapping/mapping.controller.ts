import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MappingService } from "./mapping.service";

@swagger.ApiTags("mappings")
@common.Controller("mappings")
export class MappingController {
  constructor(protected readonly service: MappingService) {}
}
