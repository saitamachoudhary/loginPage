import React,{useState} from 'react'

const ItemManagement = (WrappedComponent) => {
  return (props)=>{
    const [data, setdata] = useState([
      { id: 1, item: "Element1" },
      { id: 2, item: "Element2" },
      { id: 3, item: "Element3" },
      { id: 4, item: "Element4" },
    ]);
    const deleteItem=(id)=>{
      setdata((prevdata)=>prevdata.filter(item=>(item.id!==id)))
    }
    const updateItem=(id,newitem)=>{
      setdata((prevdata)=>{
        prevdata.map((item)=>(item.id===id)?{...item,item:newitem}:item)
      })
    }
    return <WrappedComponent
     {...props}
     items={data}
     deleteItem={deleteItem}
     updateItem={updateItem}
    />
  }
}

export default ItemManagement;