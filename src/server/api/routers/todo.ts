import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({
  


all: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});