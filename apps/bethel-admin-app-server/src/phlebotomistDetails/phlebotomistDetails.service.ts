import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PhlebotomistDetailsServiceBase } from "./base/phlebotomistDetails.service.base";

@Injectable()
export class PhlebotomistDetailsService extends PhlebotomistDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
