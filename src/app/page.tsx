"use client"

import { useEffect, useMemo } from "react";
import { useGetWorkspaces } from "./features/workspaces/api/use-get-workspaces";

export default function Home() {
  const { data, isLoading } = useGetWorkspaces();

  const workspaceId = useMemo(() => data && Array.isArray(data) ? data[0]?._id : undefined, [data]);

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      console.log("Redirect to workspace");
    } else {
      console.log("Trigger Modal");
    }
  }, [workspaceId, isLoading]);

  return <>
  <div className="">
    Heello
  </div>
  </>;
}
