"use client";
import { Modal } from "flowbite-react";

export function SearchModal({ openModal, setOpenModal }) {
  return (
    <>
      <Modal 
        className="justify-center relative items-center "
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
       
          <div>
            <input
              className="w-full p-4 border-x-0 border-t-0  py-6 dark:bg-slate-950 text-black dark:text-white  border-b-gray-500 round rounded-t-lg "
              type="text"
              placeholder="Search Entire Site | Products, Docs, Pages ..."
            />
          
          </div>
     
        <Modal.Body className="dark:bg-slate-950">
          <div className="space-y-6 min-h-[60vh]  flex justify-center">
            <p className="text-base leading-relaxed text-[#b5bebc] dark:text-gray-400">
              No items found...
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
