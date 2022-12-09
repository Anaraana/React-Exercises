import { useNavigate } from "react-router-dom";

export default function Page2(){

    const navigate = useNavigate();
    return (
      <div style={{ backgroundColor: "orange", padding: 10 }}>
        <button
          onClick={() => {
            navigate("/page1");
          }}
        >
          to page 1
        </button>
        <button
          onClick={() => {
            navigate("/page3");
          }}
        >
          to page 3
        </button>
        Page2
      </div>
    );
}