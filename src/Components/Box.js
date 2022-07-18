export default function Box(props){
    return(
        <div  onClick={props.click} className="box">
            <h3 className={props.on ? "sBox":null}>{props.id}</h3>
        </div>
    )
}