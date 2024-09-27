import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { auth } from "./auth";

interface WorkSpace {
  _id: string;
  name: string;
  userId: string;
  joinCode: string;
}

export const create = mutation({
  args: {
    name: v.string(),
  },

  handler: async (ctx, args) => {
    const userId = await auth.getUserId(ctx);
    if (!userId) {
      throw new Error("Unauthorised");
    }

    //TODO: Create a proper method later

    const joinCode = "abc1";

    const workspaceId = await ctx.db.insert("workspaces", {
      name: args.name,
      userId,
      joinCode,
    });

    return workspaceId;
  },
});

export const get = query({
  args: {},
  handler: async (ctx, _args) => {
    const workshops: WorkSpace[] = await ctx.db.query("workspaces").collect();
    return workshops;
  },
});
