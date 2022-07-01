import * as React from "react";
import { useRoutes } from "react-router-dom";


const Index = React.lazy(() => import('@/pages/index'));
const Home = React.lazy(() => import('@/pages/home'));
const About = React.lazy(() => import('@/pages/about'));

export default function Routes() {
    let element = useRoutes([
        {
            path: "/",
            element: <Index />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "about", element: <About />
                },

            ],
        },

    ]);
    return element;
}
