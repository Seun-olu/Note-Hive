import React, { Suspense, lazy } from "react";
import ErrorBoundary from "./helper/ErrorBoundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const AllNotes = lazy(() => import("./pages/AllNotes"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Deleted = lazy(() => import("./pages/DeletedNotes"));
const CreateFolder = lazy(() => import("./pages/CreateFolder"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense>
        <Router>
          <div>
            <ScrollToTop />
            <Routes>
              <Route path="/">
                <Route index element={<AllNotes />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="deleted" element={<Deleted />} />
                <Route path="create-folder" element={<CreateFolder />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
