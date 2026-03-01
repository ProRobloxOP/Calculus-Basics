import { StrictMode } from 'react'
import { 
  createRoot,
} from 'react-dom/client'

import {
  createRoutesFromElements,
  createHashRouter,
  RouterProvider,
  HashRouter,
  Route,
  redirect
} from "react-router-dom";

import Root, {
  errorOccur,
} from './routes/root'

import Home, {
  
} from './routes/home'

import TopicHandler, {
  loader as topicLoader,
  topicInProgress
} from "./routes/topicHandler"

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={errorOccur()}
    >
      <Route index element={<Home />} />
      <Route path ="Calculus-Basics" element={<Home/>} />
      <Route path="*" loader={() => {
          return redirect(`/`);
      }}/>

      <Route path="topic-in-progress" element={topicInProgress()}></Route>
      <Route path=':topic/:subtopic' element={<TopicHandler />} loader={topicLoader} />
    </Route>
  )
)

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
