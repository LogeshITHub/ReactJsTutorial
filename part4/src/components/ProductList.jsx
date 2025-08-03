import React, { useState } from 'react'
import ProductDescription from './ProductDescription'
import { MdDelete,MdModeEdit,MdUpload ,MdOutlineAddCircle } from "react-icons/md";

const ProductList = ({ products }) => {

  //#region Varaibles and Values
  const [iphonelists, SetIphonelists] = useState([
      {
        id: 1,
        Item: "iPhone 16e",
        Price: "59,900", 
      },
      {
        id: 2,
        Item: "iPhone 16",
        Price: "72,400", 
      },
      {
        id: 3,
        Item: "iPhone 16 Plus",
        Price: "82,400", 
      },
      {
        id: 4,
        Item: "iPhone 16 Pro Max",
        Price: "133,900", 
      }
    ])
  const [newiphoneid, SetNewIphoneid] = useState(0)
  const [newiphonename, SetNewIphoneName] = useState("")
  const [newiphoneprice, SetNewIphonePrice] = useState("")
  //#endregion

  //#region Functions

  function ClearData(){    
    SetNewIphoneid(0)
    SetNewIphoneName("")
    SetNewIphonePrice("")
  }

  function EditIphone(id){
    try{      
        iphonelists.map((item)=>{
          if(item.id === id){
            SetNewIphoneid(item.id)
            SetNewIphoneName(item.Item)
            SetNewIphonePrice(item.Price)
          }
        })
    }catch(e){}
  }

  function updateIphone(){ 
    try{
        let updatedIphones =  iphonelists.map((item)=>{
          return (item.id === newiphoneid)? {...item, 
            Item:newiphonename,
            Price:newiphoneprice
          }:item;
        })
        SetIphonelists(updatedIphones)
    }catch(e){console.log(e)}
    finally{      
        ClearData();
    }     
  }

  function DeleteIphone(id){
    //Valide Data only Return  
    try{
      let CurrentIphonesItems =  iphonelists.filter((item)=>{
          return (item.id !== id)
        })
        SetIphonelists(CurrentIphonesItems)
    }catch(e){console.log(e)}
  }

  function AddIphone(){ 
    try{
      SetIphonelists([...iphonelists,{id :iphonelists.length+1,Item:newiphonename,Price:newiphoneprice}])
    }catch(e){console.log(e)}
     finally{      
        ClearData();
    }  
  }
  //#endregion

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3 className="product-name">Product: {product.Item}</h3>
          <p className="product-price">Price: {product.Price}</p>
          <p className="product-description">{product.Description}</p>
          <ProductDescription Item={product.Item} Price={product.Price} Description={product.Description}/>
          {
            product.Item=="iPhone" && (
              <>
              <div className="iphone-form-container">
                <div className="iphone-form">
                  <input type='text' 
                  placeholder="Enter name" 
                  className="iphone-input" 
                  value={newiphonename}
                  onChange={(e)=>(SetNewIphoneName(e.target.value))}
                  />
                  <input type='text' 
                  placeholder="Enter price" 
                  className="iphone-input" 
                  value={newiphoneprice}
                  onChange={(e) => SetNewIphonePrice(e.target.value)}
                  />
                  {newiphoneid==0 &&
                    <MdOutlineAddCircle 
                    role='button' 
                    tabIndex={0} 
                    className="add-icon" 
                    title="Add iPhone" 
                    onClick={() => AddIphone()}
                    />
                  }
                  {newiphoneid!=0 &&
                    <MdUpload 
                    role='button' 
                    tabIndex={0} 
                    className="add-icon" 
                    title="Edit iPhone" 
                    onClick={() => updateIphone()}
                    />
                  }
                </div>
              </div>
              <p className="product-description">Following below :-</p>
               {iphonelists.map(iphonelist => (
                <div key={iphonelist.id} className="product-card iphone-item">
                  <div className="item-content">
                  <span>{iphonelist.Item} - ₹{iphonelist.Price}</span>
                  <span className="icon-actions">

                    <MdModeEdit 
                    role="button" 
                    tabIndex={0} 
                    className="edit-icon" 
                    onClick={()=>{(EditIphone(iphonelist.id))}}
                    />

                    <MdDelete 
                    role="button" 
                    tabIndex={0} 
                    className="delete-icon"                     
                    onClick={()=>{(DeleteIphone(iphonelist.id))}}
                    />
                    
                  </span>
                  </div>
                </div>
                ))}                
              </>
            )
          }
          --------------------------------------------------------------
        </div>
      ))}
    </div>
  )
}

export default ProductList
