import { z } from "zod";

const addressSchema = z.object({
  name: z.string().max(20),
  email: z.union([z.literal(""), z.string().email().max(30)]),
  pincode: z
    .string()
    .length(6)
    .regex(/^\d+$/, { message: "Invalid character(s)" }),
  state: z.string().min(2).max(20),
  addrLine1: z.string().max(20),
  addrLine2: z.string().max(20),
  phone: z
    .string()
    .length(10)
    .regex(/^\d+$/, { message: "Invalid character(s)" }),
});

export default addressSchema;
