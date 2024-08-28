import { PhlebotomistDetailsWhereInput } from "./PhlebotomistDetailsWhereInput";
import { PhlebotomistDetailsOrderByInput } from "./PhlebotomistDetailsOrderByInput";

export type PhlebotomistDetailsFindManyArgs = {
  where?: PhlebotomistDetailsWhereInput;
  orderBy?: Array<PhlebotomistDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
