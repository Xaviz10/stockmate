import { handleResponse } from "../shared";
export interface exampleInput extends handleResponse {
  exampleId: number;
}

export interface ExampleRepository {
  get({ exampleId, success, error }: exampleInput): void;
}
