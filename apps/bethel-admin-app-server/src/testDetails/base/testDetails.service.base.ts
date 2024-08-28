/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, TestDetails as PrismaTestDetails } from "@prisma/client";

export class TestDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TestDetailsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.testDetails.count(args);
  }

  async testDetailsItems(
    args: Prisma.TestDetailsFindManyArgs
  ): Promise<PrismaTestDetails[]> {
    return this.prisma.testDetails.findMany(args);
  }
  async testDetails(
    args: Prisma.TestDetailsFindUniqueArgs
  ): Promise<PrismaTestDetails | null> {
    return this.prisma.testDetails.findUnique(args);
  }
  async createTestDetails(
    args: Prisma.TestDetailsCreateArgs
  ): Promise<PrismaTestDetails> {
    return this.prisma.testDetails.create(args);
  }
  async updateTestDetails(
    args: Prisma.TestDetailsUpdateArgs
  ): Promise<PrismaTestDetails> {
    return this.prisma.testDetails.update(args);
  }
  async deleteTestDetails(
    args: Prisma.TestDetailsDeleteArgs
  ): Promise<PrismaTestDetails> {
    return this.prisma.testDetails.delete(args);
  }
}
