import { RouterProvider } from 'react-router-dom'
import { router } from "./routes"

import Global from "./styles/global"

import "@progress/kendo-theme-material/dist/material-aqua-dark.scss";

import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from './lib/react-query';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Global />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}

export default App
