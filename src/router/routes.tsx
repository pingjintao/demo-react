import { RouteObject, useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NProgress from "@/components/NProgress";

interface RouteObjectRe extends RouteObject {
  path: string;
}

export const Index = lazy(() => import("@/pages/index"));
export const Home = lazy(() => import("@/pages/home"));
export const About = lazy(() => import("@/pages/about"));

export const routes: RouteObjectRe[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<NProgress />}>
        <Index />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<NProgress />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<NProgress />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
];
export default function Routes() {
  return useRoutes(routes);
}
