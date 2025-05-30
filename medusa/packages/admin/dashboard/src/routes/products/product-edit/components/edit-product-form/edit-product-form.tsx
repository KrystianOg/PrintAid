import { Button, Input, Select, Text, Textarea, toast } from "@medusajs/ui";
import { useTranslation } from "react-i18next";
import * as zod from "zod";

import { HttpTypes } from "@medusajs/types";
import { Form } from "../../../../../components/common/form";
import { SwitchBox } from "../../../../../components/common/switch-box";
import { RouteDrawer, useRouteModal } from "../../../../../components/modals";
import { useExtendableForm } from "../../../../../dashboard-app/forms/hooks";
import { useUpdateProduct } from "../../../../../hooks/api/products";
import { transformNullableFormData } from "../../../../../lib/form-helpers";

import { KeyboundForm } from "../../../../../components/utilities/keybound-form";
import { FormExtensionZone } from "../../../../../dashboard-app";
import { useExtension } from "../../../../../providers/extension-provider";

type EditProductFormProps = {
  product: HttpTypes.AdminProduct;
};

// TODO: Move these options to different location
const coolingCapacityOptions = [
  "2.4-3.2kW",
  "3.3-4.4kW",
  "4.5-5.9kW",
  "6.0-8.0kW",
] as const;

const heatingCapacityOptions = coolingCapacityOptions;

const coolingEnergyClassOptions = ["A++", "A+++"] as const;

const heatingEnergyClassOptions = ["A+", "A++", "A+++"] as const;

const unitColorOptions = [
  "beige",
  "white",
  "graphite",
  "black",
  "silver",
  "gold",
  "blue",
  "red",
] as const;

const roomSizes = [
  "10-20m2",
  "21-30m2",
  "31-35m2",
  "36-45m2",
  "46-54m2",
  "55-64m2",
  "65-74m2",
] as const;

const brands = [
  "AUX",
  "GREE",
  "Haier",
  "Hisense",
  "Kaisai",
  "LG",
  "Rotenso",
] as const;

const EditProductSchema = zod.object({
  status: zod.enum(["draft", "published", "proposed", "rejected"]),
  title: zod.string().min(1),
  subtitle: zod.string().optional(),
  handle: zod.string().min(1),
  material: zod.string().optional(),
  description: zod.string().optional(),
  discountable: zod.boolean(),

  // Features
  coolingCapacity: zod.enum(coolingCapacityOptions),
  heatingCapacity: zod.enum(heatingCapacityOptions),
  coolingEnergyClass: zod.enum(coolingEnergyClassOptions),
  heatingEnergyClass: zod.enum(heatingEnergyClassOptions),
  seer: zod.number().optional(),
  scop: zod.number().optional(),
  indoorUnitNoise: zod.number().min(0).max(40),
  outdoorUnitNoise: zod.number().min(0).max(64),
  indoorUnitColor: zod.enum(unitColorOptions),
  roomSize: zod.enum(roomSizes),
  wifiModule: zod.boolean(),
  dedicatedApp: zod.boolean(),
  voiceControl: zod.boolean(),
  ionization: zod.boolean(),
  uvDisinfection: zod.boolean(),
  adjustableVerticalLouver: zod.boolean(),
  adjustableHorizontalLouver: zod.boolean(),
  motionSensor: zod.boolean(),
  airPurification: zod.boolean(),
  selfCleaning: zod.boolean(),
  airDehumidification: zod.boolean(),
  brand: zod.enum(brands),
});

export const EditProductForm = ({ product }: EditProductFormProps) => {
  const { t } = useTranslation();
  const { handleSuccess } = useRouteModal();

  const { getFormFields, getFormConfigs } = useExtension();
  const fields = getFormFields("product", "edit");
  const configs = getFormConfigs("product", "edit");

  const form = useExtendableForm({
    defaultValues: {
      status: product.status,
      title: product.title,
      material: product.material || "",
      subtitle: product.subtitle || "",
      handle: product.handle || "",
      description: product.description || "",
      discountable: product.discountable,
      // Features
      coolingCapacity: product.cooling_capacity || "2.4-3.2kW",
      heatingCapacity: product.heating_capacity || "2.4-3.2kW",
      coolingEnergyClass: product.cooling_energy_class || "A++",
      heatingEnergyClass: product.heating_energy_class || "A+",
      seer: product.seer || 10,
      scop: product.scop || 10,
      wifiModule: false,
      dedicatedApp: false,
      voiceControl: false,
      ionization: false,
      uvDisinfection: false,
      adjustableVerticalLouver: false,
      adjustableHorizontalLouver: false,
      motionSensor: false,
      airPurification: false,
      selfCleaning: false,
      airDehumidification: false,
    },
    schema: EditProductSchema,
    configs: configs,
    data: product,
  });

  const { mutateAsync, isPending } = useUpdateProduct(product.id);

  const handleSubmit = form.handleSubmit(async (data) => {
    const { title, discountable, handle, status, ...optional } = data;

    const nullableData = transformNullableFormData(optional);

    await mutateAsync(
      {
        title,
        discountable,
        handle,
        status: status as HttpTypes.AdminProductStatus,
        ...nullableData,
      },
      {
        onSuccess: ({ product }) => {
          toast.success(
            t("products.edit.successToast", { title: product.title })
          );
          handleSuccess();
        },
        onError: (e) => {
          toast.error(e.message);
        },
      }
    );
  });

  return (
    <RouteDrawer.Form form={form}>
      <KeyboundForm
        onSubmit={handleSubmit}
        className="flex flex-1 flex-col overflow-hidden"
      >
        <RouteDrawer.Body className="flex flex-1 flex-col gap-y-8 overflow-y-auto">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <Form.Field
                control={form.control}
                name="status"
                render={({ field: { onChange, ref, ...field } }) => {
                  return (
                    <Form.Item>
                      <Form.Label>{t("fields.status")}</Form.Label>
                      <Form.Control>
                        <Select {...field} onValueChange={onChange}>
                          <Select.Trigger ref={ref}>
                            <Select.Value />
                          </Select.Trigger>
                          <Select.Content>
                            {(
                              [
                                "draft",
                                "published",
                                "proposed",
                                "rejected",
                              ] as const
                            ).map((status) => {
                              return (
                                <Select.Item key={status} value={status}>
                                  {t(`products.productStatus.${status}`)}
                                </Select.Item>
                              );
                            })}
                          </Select.Content>
                        </Select>
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />
              <Form.Field
                control={form.control}
                name="title"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label>{t("fields.title")}</Form.Label>
                      <Form.Control>
                        <Input {...field} />
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />
              <Form.Field
                control={form.control}
                name="subtitle"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label optional>{t("fields.subtitle")}</Form.Label>
                      <Form.Control>
                        <Input {...field} />
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />
              <Form.Field
                control={form.control}
                name="handle"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label>{t("fields.handle")}</Form.Label>
                      <Form.Control>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 z-10 flex w-8 items-center justify-center border-r">
                            <Text
                              className="text-ui-fg-muted"
                              size="small"
                              leading="compact"
                              weight="plus"
                            >
                              /
                            </Text>
                          </div>
                          <Input {...field} className="pl-10" />
                        </div>
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />
              {/* <Form.Field
                control={form.control}
                name="material"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label optional>{t("fields.material")}</Form.Label>
                      <Form.Control>
                        <Input {...field} />
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              /> */}
              <Form.Field
                control={form.control}
                name="description"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label optional>
                        {t("fields.description")}
                      </Form.Label>
                      <Form.Control>
                        <Textarea {...field} />
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />
            </div>
            <hr />
            <div style={{ display: "grid", gap: "1rem" }}>
              <p>Additional fields:</p>
              <Form.Field
                control={form.control}
                name="coolingCapacity"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label>{t("fields.coolingCapacity")}</Form.Label>
                      <Form.Control>
                        <Select {...field} onValueChange={field.onChange}>
                          <Select.Trigger ref={field.ref}>
                            <Select.Value />
                          </Select.Trigger>
                          <Select.Content>
                            {coolingCapacityOptions.map((capacity) => (
                              <Select.Item key={capacity} value={capacity}>
                                {capacity}
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select>
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />

              <Form.Field
                control={form.control}
                name="heatingCapacity"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label>{t("fields.heatingCapacity")}</Form.Label>
                      <Form.Control>
                        <Select {...field} onValueChange={field.onChange}>
                          <Select.Trigger ref={field.ref}>
                            <Select.Value />
                          </Select.Trigger>
                          <Select.Content>
                            {heatingCapacityOptions.map((capacity) => (
                              <Select.Item key={capacity} value={capacity}>
                                {capacity}
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select>
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />

              <Form.Field
                control={form.control}
                name="coolingEnergyClass"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label>{t("fields.coolingEnergyClass")}</Form.Label>
                      <Form.Control>
                        <Select {...field} onValueChange={field.onChange}>
                          <Select.Trigger ref={field.ref}>
                            <Select.Value />
                          </Select.Trigger>
                          <Select.Content>
                            {coolingEnergyClassOptions.map((capacity) => (
                              <Select.Item key={capacity} value={capacity}>
                                {capacity}
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select>
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />

              <Form.Field
                control={form.control}
                name="heatingEnergyClass"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label>{t("fields.heatingEnergyClass")}</Form.Label>
                      <Form.Control>
                        <Select {...field} onValueChange={field.onChange}>
                          <Select.Trigger ref={field.ref}>
                            <Select.Value />
                          </Select.Trigger>
                          <Select.Content>
                            {heatingEnergyClassOptions.map((energyClass) => (
                              <Select.Item
                                key={energyClass}
                                value={energyClass}
                              >
                                {energyClass}
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select>
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />
              <Form.Field
                control={form.control}
                name="seer"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label>{t("fields.seer")}</Form.Label>
                      <Form.Control>
                        <Input {...field} type="number" min="0" max="100" />
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />

              <Form.Field
                control={form.control}
                name="scop"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label>{t("fields.scop")}</Form.Label>
                      <Form.Control>
                        <Input {...field} type="number" min="0" max="100" />
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />

              <Form.Field
                control={form.control}
                name="indoorUnitNoise"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label>{t("fields.indoorUnitNoise")}</Form.Label>
                      <Form.Control>
                        <Input {...field} type="number" min="0" max="40" />
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />

              <Form.Field
                control={form.control}
                name="outdoorUnitNoise"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label>{t("fields.outdoorUnitNoise")}</Form.Label>
                      <Form.Control>
                        <Input {...field} type="number" min="0" max="64" />
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />
              <Form.Field
                control={form.control}
                name="indoorUnitColor"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label>
                        {t("fields.indoorUnitColor.title")}
                      </Form.Label>
                      <Form.Control>
                        <Select {...field} onValueChange={field.onChange}>
                          <Select.Trigger ref={field.ref}>
                            <Select.Value />
                          </Select.Trigger>
                          <Select.Content>
                            {unitColorOptions.map((color) => (
                              <Select.Item key={color} value={color}>
                                {t(`fields.indoorUnitColor.${color}`)}
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select>
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />

              <Form.Field
                control={form.control}
                name="roomSize"
                render={({ field }) => {
                  return (
                    <Form.Item>
                      <Form.Label>{t("fields.roomSize")}</Form.Label>
                      <Form.Control>
                        <Select {...field} onValueChange={field.onChange}>
                          <Select.Trigger ref={field.ref}>
                            <Select.Value />
                          </Select.Trigger>
                          <Select.Content>
                            {roomSizes.map((size) => (
                              <Select.Item key={size} value={size}>
                                {size}
                              </Select.Item>
                            ))}
                          </Select.Content>
                        </Select>
                      </Form.Control>
                      <Form.ErrorMessage />
                    </Form.Item>
                  );
                }}
              />
            </div>

            <SwitchBox
              control={form.control}
              name="discountable"
              label={t("fields.discountable")}
              description={t("products.discountableHint")}
            />
            <SwitchBox
              control={form.control}
              name="wifiModule"
              label={t("fields.wifiModule")}
              description={t("products.discountableHint")}
            />
            <SwitchBox
              control={form.control}
              name="dedicatedApp"
              label={t("fields.dedicatedApp")}
              description={t("products.discountableHint")}
            />
            <SwitchBox
              control={form.control}
              name="voiceControl"
              label={t("fields.voiceControl")}
              description={t("products.discountableHint")}
            />
            <SwitchBox
              control={form.control}
              name="ionization"
              label={t("fields.ionization")}
              description={t("products.discountableHint")}
            />
            <SwitchBox
              control={form.control}
              name="uvDisinfection"
              label={t("fields.uvDisinfection")}
              description={t("products.discountableHint")}
            />
            <SwitchBox
              control={form.control}
              name="adjustableVerticalLouver"
              label={t("fields.adjustableVerticalLouver")}
              description={t("products.discountableHint")}
            />
            <SwitchBox
              control={form.control}
              name="adjustableHorizontalLouver"
              label={t("fields.adjustableHorizontalLouver")}
              description={t("products.discountableHint")}
            />
            <SwitchBox
              control={form.control}
              name="motionSensor"
              label={t("fields.motionSensor")}
              description={t("products.discountableHint")}
            />
            <SwitchBox
              control={form.control}
              name="airPurification"
              label={t("fields.airPurification")}
              description={t("products.discountableHint")}
            />
            <SwitchBox
              control={form.control}
              name="selfCleaning"
              label={t("fields.selfCleaning")}
              description={t("products.discountableHint")}
            />
            <SwitchBox
              control={form.control}
              name="airDehumidification"
              label={t("fields.airDehumidification")}
              description={t("products.discountableHint")}
            />
            <FormExtensionZone fields={fields} form={form} />
          </div>
        </RouteDrawer.Body>
        <RouteDrawer.Footer>
          <div className="flex items-center justify-end gap-x-2">
            <RouteDrawer.Close asChild>
              <Button size="small" variant="secondary">
                {t("actions.cancel")}
              </Button>
            </RouteDrawer.Close>
            <Button size="small" type="submit" isLoading={isPending}>
              {t("actions.save")}
            </Button>
          </div>
        </RouteDrawer.Footer>
      </KeyboundForm>
    </RouteDrawer.Form>
  );
};
