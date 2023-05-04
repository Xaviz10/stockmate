import React from "react";
import { SEO } from "../../components";
import { useViewAppModel } from "../../viewAppModel";
import { AppRoutes } from "../Routes";
import { useRouting } from "./useRouting";

export const Routing = () => {
  const { ScrollToTop } = useRouting();
  ScrollToTop();
  useViewAppModel();
  return (
    <>
      {/* <SEO
        title={generalSEOData.title}
        description={generalSEOData.description}
        image={generalSEOData.image}
        author={generalSEOData.author}
      /> */}
      <AppRoutes />
    </>
  );
};
