import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import ItemManagement from "./ItemManagement";
import { useLocation } from "react-router-dom";
const DropDown = ({ user, items, deleteItem, updateItem }) => {
    // console.log(items)
  const [open, setclose] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const location = useLocation();
  const dropdownOpenclose = () => {
    setclose(!open);
  };
 
  const startEditItem = (id, currentItem) => {
    setEditId(id);
    setEditValue(currentItem);
  };

  
  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

 
  const saveEditItem = (id) => {
    updateItem(id, editValue);
    setEditId(null);
    setEditValue("");
  };
  return (
    <>
      <button
        className="text-white w-[250px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={dropdownOpenclose}
      >
        Dropdown button{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* Dropdown menu */}
      <div
        id="dropdown"
        className={`z-10 w-[250px] bg-white divide-y divide-gray-100 rounded-lg shadow ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="py-2 text-sm text-gray-700">
          {items.map((ele, index) => {
            return (
              <li
                key={ele.id}
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {editId === ele.id ? (
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editValue}
                      onChange={handleEditChange}
                      className="border rounded px-2 py-1"
                    />
                    <button
                      onClick={() => saveEditItem(ele.id)}
                      className="text-blue-500"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <span>{ele.item}</span>
                    <div className="flex gap-3">
                      {location.state.role === "Admin" ? (
                        <>
                          <CiEdit
                            onClick={() => startEditItem(ele.id, ele.item)}
                          />
                          <MdDelete onClick={() => deleteItem(ele.id)} />
                        </>
                      ) : location.state.role === "Manager" ? (
                        <CiEdit
                          onClick={() => startEditItem(ele.id, ele.item)}
                        />
                      ) : null}
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ItemManagement(DropDown);
