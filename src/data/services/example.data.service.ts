import { ExampleModel } from "../models";
import { handleResponse } from "../../domain/shared";
import { ExampleRepository } from "../../domain/repositories";
export interface CatalogueResponse {
  data: ExampleModel;
}

export function exampleDataService(): ExampleRepository {
  return {
    async get({ success, error }: handleResponse) {
      try {
        if (success) {
          success();
        }
      } catch (e) {
        if (error) {
          error(e);
        }
      }
    },
  };
}
