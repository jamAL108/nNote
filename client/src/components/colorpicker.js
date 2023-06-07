import React, { useState, useEffect } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FormatColorResetOutlinedIcon from '@mui/icons-material/FormatColorResetOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Color from "./colors";
import { COLORHIDE , COLORSHOW } from "../redux/propsactions";
const Colorpicker = () => {
  const dispatch = useDispatch();
  var first=1;
  const store = useSelector((state) => state);
  const temp = JSON.parse(localStorage.getItem("temp"));
  const [col, setcol] = useState(temp.color);
  console.log(temp.color);
  const [final , setfinal] = useState({
    bg:temp.bg,
    bgcolor:temp.bgcolor
  })
  useEffect(()=>{
    if(col!==temp.color){
    temp.color=col;
    localStorage.setItem("temp",JSON.stringify(temp));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
 },[col])

 useEffect(()=>{
    temp.bg=final.bg;
    temp.bgcolor=final.bgcolor;
    localStorage.setItem("temp",JSON.stringify(temp));
// eslint-disable-next-line react-hooks/exhaustive-deps
  },[final]);


  
  useEffect(()=>{
    if(store.props.colorshow===true){
        console.log("heyy");
      let tpp1 = document.querySelector(".color-picker");
      console.log(temp.bg);
      tpp1.style.backgroundColor=temp.bg;
      for(var i=1;i<=8;i++){
        if(col[i]===true){
          var del = "#bt"+(i);
          let tpp = document.querySelector(del);
          tpp.style.border="2px solid #1A54B8";
        }
      }
      dispatch({type:COLORSHOW , payload:false});
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
},[store.props.colorshow]);

  return (
    <div className="color-picker">
      <div className="head">
        <p>colors</p>
        <div className="pull">
          <KeyboardArrowDownOutlinedIcon
            className="bttn"
            onClick={(e) => {
              e.preventDefault();
              dispatch({type:COLORHIDE , payload:true});
            }}
          />
        </div>
      </div>
      <div className="colors">
          <div
            className="box"
            id="bt1"
            onClick={(e) => {
              e.preventDefault();
              const index = 1;
              if (col[index] !== true) {
                col[index]=true;
                var tt = [...col];
                for (var i = 1; i <= 8; i++) {
                  if (i !== index) {
                    tt[i] = false;
                    console.log(tt);
                    const val = `#bt${i}`;
                    const tppp = document.querySelector(val);
                    tppp.style.border = "2px solid black";
                  }
                }
                setcol(tt);
            }
            setfinal({bg:"white" , bgcolor:"#666666"});
                let tpp = document.querySelector("#bt1");
                tpp.style.border = "2px solid #1A54B8";
                let tpp1 = document.querySelector(".color-picker");
                document.body.style.backgroundColor = "#666666";
                tpp1.style.backgroundColor = "#EFF4FA";
              }
            }
            style={{ backgroundColor: "white" }}
          >
            {col[first] === true && <DoneOutlinedIcon className="bttn" />}
            {col[first] === false && (
              <FormatColorResetOutlinedIcon className="bique" />
            )}
          </div>

          {Color.map((item, idx) => (
            <div
              className="box"
              id={`bt${idx+2}`}
              onClick={(e) => {
                e.preventDefault();
                var indi = idx+2;
                if (col[indi] !== true) {
                    col[indi]=true;
                    var tt = [...col];
                    for (var i = 1; i <= 8; i++) {
                      if (i !== indi) {
                        const val = `#bt${i}`;
                        const tppp = document.querySelector(val);
                        tppp.style.border = "2px solid black";
                        tt[i] = false;
                      }
                    }
                    setcol(tt);
                }
                setfinal({bg:item.bg , bgcolor:item.bgcolor});
                let tpp = document.querySelector(`#bt${idx+2}`);
                let tpp1 = document.querySelector(".color-picker");
                document.body.style.backgroundColor = item.bgcolor;
                tpp1.style.backgroundColor = item.bg;
                tpp.style.border = "2px solid #1A54B8";
              }}
              style={{ backgroundColor: item.bg }}
            >
              {col[idx+2] === true && <DoneOutlinedIcon className="bttn" />}
            </div>
          ))}
        </div>
      </div>
  );
};

export default Colorpicker;
