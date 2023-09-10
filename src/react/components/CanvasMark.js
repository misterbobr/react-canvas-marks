export default function CanvasMark({style, user, location, remove}) {
    function markClick(e) {
        e.stopPropagation();
    }
    return (
        <div className="mark" style={style} onClick={markClick}>
            <div className="user_wr">
                <img className="avatar" src={user.avatar} />
                <div className="username">{user.name}</div>
                <div className="delete" onClick={remove}>удалить метку</div>
            </div>
            <div className="location_wr">
                <p className="location_name">{location.name}</p>
                <img className="location_img" src={location.image}/>
            </div>
        </div>
    );
}