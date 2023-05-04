import { ExampleRepository, exampleInput } from "../../repositories";

export function useCaseExample(repository: ExampleRepository) {
  return {
    get({ exampleId, success, error }: exampleInput) {
      return repository.get({ exampleId, success, error });
    },
  };
}
