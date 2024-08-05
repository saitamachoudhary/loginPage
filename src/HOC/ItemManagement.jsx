import { useState } from "react";
const ItemManagement = (WrappedComponent) => {
  return (props) => {
    const [FaLowVision, setFlaowVision] = useState([
      {
        id: '1',
        isSelectable: true,
        name: 'Company1',
        children: [
          {
            id: '2',
            isSelectable: true,
            name: 'Department1',
            children: [
              {
                id: '3',
                isSelectable: true,
                name: 'Project1',
                children: [
                  {
                    id: '31',
                    isSelectable: true,
                    name: 'Employee1',
                  },
                  {
                    id: '32',
                    isSelectable: true,
                    name: 'Employee2',
                  },
                ],
              },
              {
                id: '4',
                isSelectable: true,
                name: 'Projects2',
                children: [
                  {
                    id: '41',
                    isSelectable: true,
                    name: 'Employee1',
                  },
                  {
                    id: '42',
                    isSelectable: true,
                    name: 'Employee2',
                  },
                ],
              },
            ],
          },
          {
            id: '5',
            isSelectable: true,
            name: 'Department2',
            children: [
              {
                id: '6',
                isSelectable: true,
                name: 'Project1',
                children: [
                  {
                    id: '61',
                    isSelectable: true,
                    name: 'Employee1',
                  },
                  {
                    id: '62',
                    isSelectable: true,
                    name: 'Employee2',
                  },
                ],
              },
              {
                id: '7',
                isSelectable: true,
                name: 'Projects2',
                children: [
                  {
                    id: '71',
                    isSelectable: true,
                    name: 'Employee1',
                  },
                  {
                    id: '72',
                    isSelectable: true,
                    name: 'Employee2',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '8',
        isSelectable: true,
        name: 'Company2',
        children: [
          {
            id: '9',
            isSelectable: true,
            name: 'Department1',
            children: [
              {
                id: '10',
                isSelectable: true,
                name: 'Project1',
                children: [
                  {
                    id: '101',
                    isSelectable: true,
                    name: 'Employee1',
                  },
                  {
                    id: '102',
                    isSelectable: true,
                    name: 'Employee2',
                  },
                ],
              },
              {
                id: '11',
                isSelectable: true,
                name: 'Projects2',
                children: [
                  {
                    id: '111',
                    isSelectable: true,
                    name: 'Employee1',
                  },
                  {
                    id: '112',
                    isSelectable: true,
                    name: 'Employee2',
                  },
                ],
              },
            ],
          },
          {
            id: '12',
            isSelectable: true,
            name: 'Department2',
            children: [
              {
                id: '13',
                isSelectable: true,
                name: 'Project1',
                children: [
                  {
                    id: '131',
                    isSelectable: true,
                    name: 'Employee1',
                  },
                  {
                    id: '132',
                    isSelectable: true,
                    name: 'Employee2',
                  },
                ],
              },
              {
                id: '14',
                isSelectable: true,
                name: 'Projects2',
                children: [
                  {
                    id: '141',
                    isSelectable: true,
                    name: 'Employee1',
                  },
                  {
                    id: '142',
                    isSelectable: true,
                    name: 'Employee2',
                  },
                ],
              },
            ],
          },
        ],
      },
    ]);
    
    const deleteItemById = (id, items) => {
      return items.reduce((acc, item) => {

        if (item.id !== id) {

          if (item.children) {
            item.children = deleteItemById(id, item.children);
          }

          acc.push(item);
        }
        return acc;
      }, []);
    };

    const updateItemById=(id,editValue,item)=>{
      return item.map((ele)=>{
         if(ele.id===id){
          return {...ele,name:editValue}
         }
         else if(ele.children){
          return {...ele,children:updateItemById(id,editValue,ele.children)}
         }
         return ele;
      })
    }

    const deleteItem = (id) => {
      setFlaowVision((prevData) => deleteItemById(id, prevData));
    };

    const updateItem=(id,editValue)=>{
      setFlaowVision((prevData)=>updateItemById(id,editValue,prevData));
    }

    return (
      <WrappedComponent
        {...props}
        items={FaLowVision}
        deleteItem={deleteItem}
        updateItem={updateItem}
      />
    );
  };
};

export default ItemManagement;