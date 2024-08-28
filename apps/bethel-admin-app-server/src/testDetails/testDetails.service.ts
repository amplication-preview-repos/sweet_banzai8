import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestDetailsServiceBase } from "./base/testDetails.service.base";

@Injectable()
export class TestDetailsService extends TestDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
