import React from "react";
import AutoCompleteNaya from "./components/InterviewLevel/AutoCompleteNaya";
import MultiStepFOrm from "./components/InterviewLevel/MultiStepFOrm";
import DragDropList from "./components/InterviewLevel/DragDrop";
import PaginationNewNaya from "./components/InterviewLevel/PaginationNewNaya";
import InfiniteScrollNayaNew from "./components/InterviewLevel/InfiniteScrollNayaNew";
import OTPbahutNaya from "./components/InterviewLevel/OTPbahutNaya";
import TodoNew from "./components/InterviewLevel/TodoNew";
import DataTable from "./components/InterviewLevel/DataTable";
import DataTable2 from "./components/InterviewLevel/DataTable2";
import CommentSystem from "./components/InterviewLevel/CommentSystem";
import Accordion from "./components/InterviewLevel/randomfix/AccoridanFIx";
import CartSystem from "./components/InterviewLevel/CartSystem";
import PromiseNaya from "./components/InterviewLevel/randomfix/PromiseNaya";

const DATA = [
  { id: 1, name: "Kushagra", age: 23, role: "Frontend" },
  { id: 2, name: "Aman", age: 25, role: "Backend" },
  { id: 3, name: "Neha", age: 22, role: "QA" },
  { id: 4, name: "Rohit", age: 27, role: "DevOps" },
  { id: 5, name: "Kunal", age: 24, role: "Frontend" },
];

const App = () => {
  return (
    <div className="w-full h-screen">
      <PromiseNaya />
      {/* <CartSystem /> */}
      {/* <Accordion /> */}
      {/* <CommentSystem />/ */}
      {/* <DataTable2 data={DATA} /> */}
      {/* <DataTable /> */}
      {/* <TodoNew /> */}
      {/* <OTPbahutNaya /> */}
      {/* <InfiniteScrollNayaNew/> */}
      {/* <PaginationNewNaya /> */}
      {/* <DragDropList /> */}
      {/* <MultiStepFOrm /> */}
      {/* <AutoCompleteNaya/> */}
    </div>
  );
};

export default App;
