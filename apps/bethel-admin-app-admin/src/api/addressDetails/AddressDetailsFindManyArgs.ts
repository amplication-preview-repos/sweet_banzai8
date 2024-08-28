import { AddressDetailsWhereInput } from "./AddressDetailsWhereInput";
import { AddressDetailsOrderByInput } from "./AddressDetailsOrderByInput";

export type AddressDetailsFindManyArgs = {
  where?: AddressDetailsWhereInput;
  orderBy?: Array<AddressDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
