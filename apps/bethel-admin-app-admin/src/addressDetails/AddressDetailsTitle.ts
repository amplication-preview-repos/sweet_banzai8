import { AddressDetails as TAddressDetails } from "../api/addressDetails/AddressDetails";

export const ADDRESSDETAILS_TITLE_FIELD = "locationUrl";

export const AddressDetailsTitle = (record: TAddressDetails): string => {
  return record.locationUrl?.toString() || String(record.id);
};
