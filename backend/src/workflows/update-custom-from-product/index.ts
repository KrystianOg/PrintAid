import { ProductDTO } from "@medusajs/framework/types";
import {
  createWorkflow,
  when,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";
import {
  createRemoteLinkStep,
  dismissRemoteLinkStep,
  useQueryGraphStep,
} from "@medusajs/medusa/core-flows";
import { createCustomStep } from "../create-custom-from-cart/steps/create-custom";
import { Modules } from "@medusajs/framework/utils";
import { HELLO_MODULE } from "../../modules/hello";
// import { deleteCustomStep } from "./steps/delete-custom";
import { updateCustomStep } from "./steps/update-custom";

export type UpdateCustomFromProductStepInput = {
  product: ProductDTO;
  additional_data?: {
    custom_name?: string | null;
  };
};

export const updateCustomFromProductWorkflow = createWorkflow(
  "update-custom-from-product",
  (input: UpdateCustomFromProductStepInput) => {
    const { data: products } = useQueryGraphStep({
      entity: "product",
      fields: ["custom.*"],
      filters: {
        id: input.product.id,
      },
    });

    const created = when(
      "create-product-custom-link",
      {
        input,
        products,
      },
      (data) =>
        !data.products[0].custom &&
        data.input.additional_data?.custom_name?.length > 0,
    ).then(() => {
      const custom = createCustomStep({
        custom_name: input.additional_data.custom_name,
      });

      createRemoteLinkStep([
        {
          [Modules.PRODUCT]: {
            product_id: input.product.id,
          },
          [HELLO_MODULE]: {
            custom_id: custom.id,
          },
        },
      ]);

      return custom;
    });

    // TODO update, or delete Custom record
  },
);
