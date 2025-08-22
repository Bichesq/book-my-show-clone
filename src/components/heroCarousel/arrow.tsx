export const NextArrow = (props: any) => {
    return (
        <div>
            <div className={props.className} style={{color: 'red', padding: '10px'}} onClick={props.onClick} ></div>
        </div>
    );
}

export const PrevArrow = (props: any) => {
    return (
        <div>
            <div className={props.className} style={{...props.style}} onClick={props.onClick} ></div>
        </div>
    );
}