import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  one: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.post.findUnique({
        where: { id: input.id },
        include: { author: { select: { id: true, name: true } }, tags: true },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
  getMyPosts: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany({
      where: { authorId: ctx.session.user.id },
      include: { author: { select: { id: true, name: true } }, tags: true },
    });
  }),
});
