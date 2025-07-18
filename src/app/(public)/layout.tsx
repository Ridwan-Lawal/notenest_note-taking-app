import { ChildrenType } from "@/app/_utils/types";
import React from "react";

export default function Layout({ children }: ChildrenType) {
  return (
    <div>
      <header>{/* nav component */}</header>

      <main>{children}</main>

      <footer>{/* footer component */}</footer>
    </div>
  );
}
