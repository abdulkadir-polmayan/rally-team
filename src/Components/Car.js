export default function Car(props){
    return(
        <div >
            <div className="yCar">
                <div className={props.selected ? "sCar":"none"}>in your team</div>
                <img className={props.selected ? "car-image":null} onClick={props.click} src={props.image}/>
            </div>
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
            <h3>{props.year}</h3>
        </div>
    )
}