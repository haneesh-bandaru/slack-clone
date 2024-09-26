"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const page = () => {
  const tasks = useQuery(api.tasks.get);
  console.log(tasks);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}Hello */}
    </main>
  );
};

export default page;
