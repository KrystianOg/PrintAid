import { Module } from "@medusajs/framework/utils";
import CustomModuleService from "./service";

export const HELLO_MODULE = "hello";

export default Module(HELLO_MODULE, {
  service: CustomModuleService,
});
