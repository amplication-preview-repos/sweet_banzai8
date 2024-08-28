import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AddressDetailsServiceBase } from "./base/addressDetails.service.base";

@Injectable()
export class AddressDetailsService extends AddressDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
