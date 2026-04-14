import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "./components/ToasterFallback";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </>
  );
}