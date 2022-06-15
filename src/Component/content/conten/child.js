import "../../../css/styleProduct.css"

const Card = (props) => {
    return (
        <div className="col-md-4 col-sm-6">
            <div id="serv_hover" className="room">
                <div className="room_img">
                    <figure><img src={props.image} alt="#" /></figure>
                </div>
                <div className="bed_room">
                    <h3>{props.name}</h3>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there </p>
                </div>
            </div>
        </div>
    )
}
export default Card;