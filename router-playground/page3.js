

import { useNavigate } from "react-router-dom";export default function Page3(){
    const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      <button
        onClick={() => {
          navigate("/page1");
        }}
      >
        to page 1
      </button>
      <button
        onClick={() => {
          navigate("/page2");
        }}
      >
        to page 2
      </button>
      Page3
    </div>
  );


}