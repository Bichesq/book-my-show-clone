import { GrNext, GrPrevious } from "react-icons/gr";

export const NextArrow = (props: any) => {
  return (
    <div
      className={
        props.className +
        "mx-1 p-2.5 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-gray-900 align-center justify-center"
      }
      style={{
        ...props.style,
        position: "absolute",
        right: "10px",
        display: "block",
        zIndex: 10,
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={props.onClick}
    >
      <GrNext />
    </div>
  );
};

export const PrevArrow = (props: any) => {
    return (
      
        <div className={props.className + "mx-1 p-2.5 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-gray-900 align-center justify-center"} style={{ ...props.style, position: "absolute", left: "10px", display: "block", zIndex: 10, top: "50%", transform: "translateY(-50%)" }} onClick={props.onClick} >
            <GrPrevious />
        </div>
        
    );
}