import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import HelloModuleService from "../../../modules/hello/service";
import { HELLO_MODULE } from "../../../modules/hello";

type CreateCustomStepInput = {
  custom_name?: string;
};

export const createCustomStep = createStep(
  "create-custom",
  async (data: CreateCustomStepInput, { container }) => {
    if (!data.custom_name) {
      return;
    }

    const helloModuleService: HelloModuleService =
      container.resolve(HELLO_MODULE);

    const custom = await helloModuleService.createCustoms(data);

    return new StepResponse(custom, custom);
  },
  async (custom, { container }) => {
    const helloModuleService: HelloModuleService =
      container.resolve(HELLO_MODULE);

    if (!custom) {
      return;
    }

    await helloModuleService.deleteCustoms(custom.id);
  }
);
