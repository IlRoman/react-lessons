import React from "react";
import UserInfo from "./UserInfo";
import moment from "moment";

const date = date => moment(date).format("DD MMM YYYY");

function Comment(props) {
    return (
        <div className="comment">
            <UserInfo user={props.user} />
            <div>{props.text}</div>
            <div>{date(props.date)}</div>
        </div>
    );
}

export default Comment;