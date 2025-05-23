import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import eBookDisplayRoutes from "./eBookDisplay/routes";
import displayWithImageRoutes from "./displayWithImage/routes";
import displayWithPriceRoutes from "./displayWithPrice/routes";
import wishlistManagementRoutes from "./wishlistManagement/routes";
import reviewManagementRoutes from "./reviewManagement/routes";
import communityContentRoutes from "./communityContent/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
    ...commonRoutes,
    ...staticPageRoutes,
    ...userRoutes,
    ...roleRoutes,
    ...homeRoutes,
    ...eBookDisplayRoutes,
    ...displayWithImageRoutes,
	  ...displayWithPriceRoutes,
    ...wishlistManagementRoutes,
    ...reviewManagementRoutes,
    ...communityContentRoutes,
  ])
  return router
}

const MobileRoutes = () => {
  const router = useRoutes([ 
    ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}