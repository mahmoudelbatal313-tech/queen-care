import { BookingPage } from "@/pages/BookingPage";
import { ContactPage } from "@/pages/ContactPage";
import { HairServicesPage } from "@/pages/HairServicesPage";
import { HomePage } from "@/pages/HomePage";
import { SkinServicesPage } from "@/pages/SkinServicesPage";
import { WelcomePage } from "@/pages/WelcomePage";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const rootRoute = createRootRoute({ component: () => <Outlet /> });
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Navigate to="/welcome" />,
});
const welcomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/welcome",
  component: WelcomePage,
});
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/home",
  component: HomePage,
});
const skinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/skin-services",
  component: SkinServicesPage,
});
const hairRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/hair-services",
  component: HairServicesPage,
});
const bookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/booking",
  component: BookingPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  welcomeRoute,
  homeRoute,
  skinRoute,
  hairRoute,
  bookingRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
