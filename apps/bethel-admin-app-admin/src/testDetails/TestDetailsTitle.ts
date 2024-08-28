import { TestDetails as TTestDetails } from "../api/testDetails/TestDetails";

export const TESTDETAILS_TITLE_FIELD = "testName";

export const TestDetailsTitle = (record: TTestDetails): string => {
  return record.testName?.toString() || String(record.id);
};
