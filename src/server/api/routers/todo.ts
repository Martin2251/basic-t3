import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { todoInput } from "~/types";

export const todoRouter = createTRPCRouter({
  


all: protectedProcedure.query(async({ctx}) => {
    const todos = await ctx.prisma.todo.findMany({
        where:{
            userId: ctx.session.user.id,

        },
    })
    console.log("todos from prisma",
     todos.map(({id,text,done}) => ({id,text}))
     );
    return [
        {
            id: "fake",
            text: "fake text",
            done: false,
        },
        {
            id: "fake2",
            text: "fake text2",
            done: true,
        }
    ]
  }),
  create: protectedProcedure.input().mutation(async({ctx}) =>{

  })
});
