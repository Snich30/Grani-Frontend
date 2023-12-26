import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/steps1/HomePage/Home.tsx";
import Page2 from "./Pages/steps1/Forum/Page2.tsx";
import CardsArea from "./Pages/steps2/Cards-area/Cards-area.tsx";
import BackBtn from "./Pages/steps3/Settlement/btn-back/BackBtn.tsx";
import ApplicationPage3 from "./Pages/steps1/Forum2/applicationPage3.tsx";
import Checklist from "./Pages/steps2/Booking-checklist/Checklist.tsx";
import Settlement from "./Pages/steps3/Settlement/Settlement.tsx";
import ChecklistDoc from "./Pages/steps5/Checklist-documents/ChecklistDoc.tsx";
import TemplateBlank from "./Pages/steps5/Template-bank/TemplateBlank.tsx";
import CompletionCheckOut from "./Pages/steps12/Completion-check-out/CompletionCheckOut.tsx";
import SportsCamps from "./Pages/steps12/Sports-camps/SportsCamps.tsx";
import Awarding from "./Pages/steps11/Awarding/Awarding.tsx";
import ChecklistInventory from "./Pages/steps7/Checklist-Inventory/ChecklistInventory.tsx";
import TestConnection from "./testConnection.tsx";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Forum",
        element: <Page2 />,
      },
      {
        path: "/Forum2",
        element: <ApplicationPage3/>
      },
      {
        path: "/Cards-area",
        element: <CardsArea />,
      },
      {
        path: "/Booking-checklist",
        element: <Checklist />,
      },
      {
        path: "/BackBtn",
        element: <BackBtn />,
      },
      {
        path: "/Settlement",
        element: <Settlement/>,
      },
      {
        path: "/Checklist-documents",
        element: <ChecklistDoc/>
      },
      {
        path: "/Template-bank",
        element: <TemplateBlank/>
      },
      // шаг 7
      {
        path: "/Checklist-Inventory",
        element: <ChecklistInventory/>
      },
      // шаг 11
      {
        path: "/Awarding",
        element: <Awarding/>
      },
      // шаг 12
      {
        path: "/Completion-check-out",
        element: <CompletionCheckOut/>
      },
      {
        path: "/Sports-camps",
        element: <SportsCamps/>
      },
      {
        path: "testConnection",
        element:<TestConnection/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
