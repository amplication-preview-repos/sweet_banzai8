/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AddressDetails as PrismaAddressDetails } from "@prisma/client";

export class AddressDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AddressDetailsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.addressDetails.count(args);
  }

  async addressDetailsItems(
    args: Prisma.AddressDetailsFindManyArgs
  ): Promise<PrismaAddressDetails[]> {
    return this.prisma.addressDetails.findMany(args);
  }
  async addressDetails(
    args: Prisma.AddressDetailsFindUniqueArgs
  ): Promise<PrismaAddressDetails | null> {
    return this.prisma.addressDetails.findUnique(args);
  }
  async createAddressDetails(
    args: Prisma.AddressDetailsCreateArgs
  ): Promise<PrismaAddressDetails> {
    return this.prisma.addressDetails.create(args);
  }
  async updateAddressDetails(
    args: Prisma.AddressDetailsUpdateArgs
  ): Promise<PrismaAddressDetails> {
    return this.prisma.addressDetails.update(args);
  }
  async deleteAddressDetails(
    args: Prisma.AddressDetailsDeleteArgs
  ): Promise<PrismaAddressDetails> {
    return this.prisma.addressDetails.delete(args);
  }
}
