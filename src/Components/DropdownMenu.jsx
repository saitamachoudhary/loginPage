import React, { useState } from "react";
import ItemManagement from "../HOC/ItemManagement";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { HiPlusSm } from "react-icons/hi";
import { HiMiniMinus } from "react-icons/hi2";
import { useLocation } from "react-router-dom";

// Recursive component for dropdown items
const DropdownItem = ({ item, deleteItem, updateItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const location=useLocation();
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const EditItem = (id, name) => {
    setEditId(id);
    setEditValue(name);
  };

  const saveEditItem = (id) => {
    updateItem(id, editValue);
    setEditValue("");
    setEditId(null);
  };

  return (
    <div>
      <div className="cursor-pointer p-2 hover:bg-gray-200 flex justify-between items-center">
        {editId === item.id ? (
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={editValue}
              onChange={(e) => {
                setEditValue(e.target.value);
              }}
              className="border rounded px-2 py-1"
            />
            <button
              onClick={() => saveEditItem(item.id)}
              className="text-blue-500"
            >
              Save
            </button>
          </div>
        ) : (
          <>
            <span>{item.name}</span>
            <div className="flex items-center gap-2">
              {/* <CiEdit
                onClick={() => {
                  EditItem(item.id, item.name);
                }}
              />
              <MdDelete onClick={() => deleteItem(item.id)} /> */}
               {location.state.role === "Admin" ? (
                        <>
                          <CiEdit
                            onClick={() => {
                              EditItem(item.id, item.name);
                            }}
                          />
                          <MdDelete onClick={() => deleteItem(item.id)} />
                        </>
                      ) : location.state.role === "Manager" ? (
                        <CiEdit
                        onClick={() => {
                          EditItem(item.id, item.name);
                        }}
                        />
                      ) : null}
              {item.children && (
                <span className="cursor-pointer" onClick={toggleOpen}>
                  {isOpen ? <HiMiniMinus /> : <HiPlusSm />}
                </span>
              )}
            </div>
          </>
        )}
      </div>
      {isOpen && item.children && (
        <div className="ml-4 border-l pl-2">
          {item.children.map((child) => (
            <DropdownItem key={child.id} item={child} deleteItem={deleteItem} updateItem={updateItem} />
          ))}
        </div>
      )}
    </div>
  );
};

const DropdownMenu = ({ items, deleteItem, updateItem }) => {
  return (
    <div className="p-4 max-w-md bg-white border rounded shadow">
      {items.map((item) => (
        <DropdownItem
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
};

export default ItemManagement(DropdownMenu);
