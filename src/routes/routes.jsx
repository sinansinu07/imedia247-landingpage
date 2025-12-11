import PageNotFound from "../Components/PageNotFound/PageNotFound.jsx";
import Thankyou from "../Components/ThankYouPage/Thankyou.jsx";
import UnAuthorized from "../Components/UnAuthorized/UnAuthorixed.jsx";
import AssetsPage from "../Pages/AssetsPage.jsx";
import HomePage from "../Pages/HomePage.jsx";

const routes = [
  {
    path: "/",
    element: <HomePage/>,
    isProtected: false,
  },
  {
    path: "/assets",
    element: <AssetsPage/>,
    isProtected: false,
  },
  {
    path: "*",
    element: <PageNotFound/>,
    isProtected: false,
  },
  {
    path: "/thank-you",
    element: <Thankyou/>,
    isProtected: false,
  },
  // {
  //   path: "/about-us",
  //   element: <AboutUs/>,
  //   isProtected: false,
  // },
  {
    path: "/un-authorized",
    element: <UnAuthorized/>,
    isProtected: false,
  },
];

export default routes;




