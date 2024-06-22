import { ApkInfoWhereInput } from "./ApkInfoWhereInput";
import { ApkInfoOrderByInput } from "./ApkInfoOrderByInput";

export type ApkInfoFindManyArgs = {
  where?: ApkInfoWhereInput;
  orderBy?: Array<ApkInfoOrderByInput>;
  skip?: number;
  take?: number;
};
