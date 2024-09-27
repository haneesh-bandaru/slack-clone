import React from "react";

interface WorkspaceIdProps {
  params: {
    workspaceId: string;
  };
}

function page({ params }: WorkspaceIdProps) {
  return <div>ID: {params.workspaceId}</div>;
}

export default page;
