import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { useState } from "react";

type Props = {
  text: string;
  username: string;
  user_img: string;
};

const Comment: React.FunctionComponent<Props> = ({
  text,
  username,
  user_img,
}) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="tw-flex tw-my-4">
      <img src={user_img} className="tw-w-8 tw-mt-1 tw-h-8 tw-rounded-full" />
      <div className="tw-border-b-1 tw-border-gray-200 tw-w-full">
        <div className="tw-ml-2 tw-w-80 tw-flex-wrap">
          <b>{username}</b> {text}
        </div>
        <div className="tw-flex tw-py-2 tw-pl-2 tw-text-gray-500">
          <span>5w</span>
          {liked && <span className="tw-ml-2">1 like</span>}
          <span className="tw-ml-2">Reply</span>
        </div>
      </div>
      <div className="tw-flex tw-flex-col tw-justify-center tw-cursor-pointer">
        <FontAwesomeIcon onClick={()=> setLiked(!liked)} icon={liked ? faHeartSolid : faHeart} />
      </div>
    </div>
  );
};
export default Comment;
