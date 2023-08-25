import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/counterProduct/counterSlice";
const TinyProduct = ({ title, price, number, Image, id }) => {
  const dispatch = useDispatch();
  return (
    <div style={{marginTop:"5px"}}>
      <div style={{ display: "flex" }}>
        <img src={Image} alt="image" style={{ width: "80px" }} />
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            width:"100%"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around",alignItems:"center",width:"100%" }}>
            <div>
              <p>{title}</p>
            </div>
            <AiOutlineClose
              size={"15px"}
              onClick={() => {
                dispatch(remove({ id }));
              }}
            ></AiOutlineClose>
          </div>
          <p>
            {number} x {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TinyProduct;
