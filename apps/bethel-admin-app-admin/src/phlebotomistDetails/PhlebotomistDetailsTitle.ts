import { PhlebotomistDetails as TPhlebotomistDetails } from "../api/phlebotomistDetails/PhlebotomistDetails";

export const PHLEBOTOMISTDETAILS_TITLE_FIELD = "plebName";

export const PhlebotomistDetailsTitle = (
  record: TPhlebotomistDetails
): string => {
  return record.plebName?.toString() || String(record.id);
};
