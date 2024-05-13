import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import Particle from "./Animation/Particle/Particle";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="mx-auto max-w-7xl">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes}></RouterProvider>
        <Toaster></Toaster>
      </QueryClientProvider>
    </div>
  );
}

export default App;
