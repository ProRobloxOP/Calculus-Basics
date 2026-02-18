import { StrictMode } from 'react'
import { 
  createRoot,
} from 'react-dom/client'

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
  redirect
} from "react-router-dom";

import Root, {
  errorOccur
} from './routes/root'

import Home, {
  
} from './routes/home'

import TopicHandler, {
  loader as topicLoader,
  topicInProgress
} from "./routes/topicHandler"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={errorOccur()}
    >
      <Route index element={<Home />} />
      <Route path="/topic-in-progress" element={topicInProgress()}></Route>
      <Route path="*" loader={() => {
        return redirect(`/`);
      }}/>

      <Route path=':topic/:subtopic' element={<TopicHandler />} loader={topicLoader} />
    </Route>
  )
)

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={ router }></RouterProvider>
  </StrictMode>,
)
