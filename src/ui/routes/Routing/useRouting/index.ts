import { useEffect, useState } from "react";
import { useCustomEffect, useNavigation } from "../../../hooks";

export function useRouting() {
  const { getCurrentPathName, getHash } = useNavigation();
  // const [generalSEOData, setGeneralSEOData] = useState<ProductionSeoModel>({
  //   title: "",
  //   description: "",
  //   image: "",
  //   author: "",
  //   robots: "",
  //   jsonLd: "",
  //   facebookAppId: "",
  //   twitterSite: "",
  // });

  // const { getSEO } = useCaseGeneralSEO(generalSEOService());

  function ScrollToTopChecker(pathName: string) {
    useCustomEffect(() => {
      if (pathName) {
        const currentHash = getHash();
        document.documentElement.scrollTo(0, 0);
        if (currentHash) {
          setTimeout(() => {
            const link = document.createElement("a");
            link.href = currentHash; //any other extension
            document.body.appendChild(link);
            link.click();
            link.remove();
          }, 1000);
        }
      }
    }, [pathName]);

    return null;
  }

  const ScrollToTop = () => ScrollToTopChecker(getCurrentPathName());

  // SEO
  // const handleSuccessProductionSEO = (data: ProductionSeoModel) => {
  //   setGeneralSEOData(data);
  // };

  // const handleGetProductionSEO = (pathName: string) => {
  //   getSEO({ pathName, success: handleSuccessProductionSEO });
  // };

  // useCustomEffect(() => {
  //   const pathName = getCurrentPathName();
  //   handleGetProductionSEO(pathName);
  // }, [getCurrentPathName()]);

  return { ScrollToTop };
}
