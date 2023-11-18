import { useState } from "react";
import "./App.css";
import hafez from "./hafez.json";
import image1 from "../public/hafeziee.png";
import nody2 from "../public/nody2.png";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import Btnmui from "@mui/material/Button";
import { Dialog, DialogContent } from "@mui/material";
function App() {
  const [show, setShow] = useState("");
  const [show1, setShow1] = useState("");
  const [show2, setShow2] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  function randomNum(min, max) {
    return Math.random() * (max - min) + min;
  }
  const id = parseInt(randomNum(0, hafez.length));
  function randfaal() {
    return hafez[id].id;
  }
  function randfaal1() {
    return hafez[id].title;
  }
  function randfaal2() {
    return hafez[id].content;
  }

  function handelclick() {
    setShow(randfaal());
    setShow1(randfaal1());
    setShow2(randfaal2());
    setShowDialog(true);
  }
  function handeldialogclose() {
    setShowDialog(false);
  }

  return (
    <div className="container">
      {/* عکس سمت راست حافظیه */}
      <div className="background-image">
        {" "}
        <img src={image1} width="450px" />
      </div>
      {/* دکمه گرفتن فال سمت چپ */}
      <div className="create-faal">
        <div className="create-fall-text">
          <h3>چطور فال حافظ بگیریم ؟</h3>
          <p>
            یک نفر از بزرگان خانواده یا کسی که بتواند شعر را به خوبی بخواند یا کسی که دیگران معتقدند به اصطلاح خوب فال
            می‌گیرد ابتدا نیت می‌کند، یعنی در دل آرزویی می‌کند. سپس به طور تصادفی صفحه‌ای را از کتاب حافظ می‌گشاید و با
            صدای بلند شروع به خواندن می‌کند. کسانی که ایمان مذهبی داشته باشند هنگام فال گرفتن فاتحهای می‌خوانند و سپس
            کتاب حافظ را می‌بوسند، آنگاه با ذکر اورادی آن را می‌گشایند و فال خود را می‌خوانند
          </p>
        </div>
        <div className="create-fall-text">
          <h3>چطور فال حافظ بگیریم ؟</h3>
          <p>
            یک نفر از بزرگان خانواده یا کسی که بتواند شعر را به خوبی بخواند یا کسی که دیگران معتقدند به اصطلاح خوب فال
            می‌گیرد ابتدا نیت می‌کند، یعنی در دل آرزویی می‌کند. سپس به طور تصادفی صفحه‌ای را از کتاب حافظ می‌گشاید و با
            صدای بلند شروع به خواندن می‌کند. کسانی که ایمان مذهبی داشته باشند هنگام فال گرفتن فاتحهای می‌خوانند و سپس
            کتاب حافظ را می‌بوسند، آنگاه با ذکر اورادی آن را می‌گشایند و فال خود را می‌خوانند
          </p>
        </div>

        <div className="create-faal-button">
          <Btnmui variant="outlined" onClick={handelclick} className="btn-image">
            {" "}
            ابتدا نیت سپس کلیک کنید{" "}
          </Btnmui>
          <img className="nody-faal" src={nody2} alt="" />
          <Dialog
            open={showDialog}
            onClose={handeldialogclose}
            PaperProps={{
              style: { width: "1000px", height: "1000px", padding: "25px", margin: "30px", border: "4px double black" },
            }}
          >
            <DialogContent>
              <div className="dialog">
                <span className="dialog-span1"> شماره غزل : {show} </span>
                <span className="dialog-span2"> {show1}</span>
                <span className="dialog-span3"> {show2}</span>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default App;
