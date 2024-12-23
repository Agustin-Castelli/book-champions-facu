import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";

import PageNotFound from "./components/PageNotFound/PageNotFound";
import BookDetails from "./components/BookDetails/BookDetails";
import Protected from "./components/Protected/Protected";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
    console.log(isLoggedIn);
  };

  const router = createBrowserRouter([
    {
      path: "/", 
      element: <Protected isSignedIn={isLoggedIn}></Protected>    ,
      children: 
        [
          {
            path: "/",
            element: <Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>,
          },
          {
            path: "book/:bookId",
            element: <BookDetails/>
          },
        ],
    },
    {
      path: "/login", 
      element: <Login onLogin={loginHandler}/>
    },
    { path: "*", element: <PageNotFound /> },
  ]);

  return (
    <div>
      {<RouterProvider router={router}/>}
    </div>
  );
};

export default App;