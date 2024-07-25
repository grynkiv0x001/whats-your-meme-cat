import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import App from '@/App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App/>}/>
      <Route path="dashboard" element={<div>dashboard</div>}/>
      <Route path="test" element={<div>Test</div>}/>
      <Route path="*" element={<div>404</div>}/>
    </>
  )
);

export default router;
