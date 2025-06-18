import { z } from "zod";

const licenses = [
  "CC-BY",
  "CC-BY-SA",
  "CC-BY-NC",
  "CC-BY-NC-SA",
  "CC0",
  "Proprietary",
  "Other",
] as const;

const LicenseEnum = z.enum(licenses);

export type LicenseType = z.infer<typeof LicenseEnum>;

export const updateProductSchema = z.object({
  title: z.string().min(3).max(80),
  description: z.string().min(3).max(255),
  category: z.string(),
  defaultScale: z.string().min(10).max(1000), // 10% or 1000%  of initial scale
  licenseType: LicenseEnum,
  licenseUrl: z.string().optional(),
  creatorName: z.string().optional(),
  creatorProfileUrl: z.string().optional(),
  sourcePlatform: z.string().optional(),
  sourceUrl: z.string().optional(),
  commercialUseAllowed: z.boolean().default(false),
  remixAllowed: z.boolean().default(false),
  attributionRequired: z.boolean().default(true),
});
