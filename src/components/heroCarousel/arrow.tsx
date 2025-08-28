import { GrNext, GrPrevious } from "react-icons/gr";

export const NextArrow = (props: any) => {
    return (
        <div>
            <div className={props.className} style={{...props.style, color: 'red', padding: '10px', display: "block", right: "10px", zIndex: 1}} onClick={props.onClick} >
                <GrNext />
            </div>
        </div>
    );
}

export const PrevArrow = (props: any) => {
    return (
        <div>
            <div className={props.className} style={{...props.style, display: "block", left: "10px", zIndex: 1}} onClick={props.onClick} >
                <GrPrevious />
            </div>
        </div>
    );
}