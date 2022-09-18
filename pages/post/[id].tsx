import {
  faHeart,
  faComment,
  faShareFromSquare,
  faBookmark,
  faArrowAltCircleLeft,
} from "@fortawesome/free-regular-svg-icons";
import {
  faEllipsisVertical,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import posts from "../../posts";

const PostPage: NextPage = () => {
  const router = useRouter();
  const post = posts.find((e) => e.id === +router.query.id);
  const [likes, increaseLike] = useState(10);
  const [liked, setLikeState] = useState(false);
  const incrementLike = () => {
    if (!liked) {
      increaseLike((likes as any) + 1);
    } else {
      increaseLike((likes as any) - 1);
    }
    setLikeState(!liked);
  };

  //   console.log(post, posts);
  return (
    <div className="tw-container tw-mx-auto tw-max-w-lg t">
      <div className="tw-flex tw-py-2 tw-justify-between tw-px-2">
        <div className="tw-flex">
          <FontAwesomeIcon
            onClick={() => router.back()}
            icon={faArrowAltCircleLeft}
            className="tw-cursor-pointer tw-text-3xl tw-mt-2"
          />
          <img
            src={post?.user_img_url}
            className="tw-w-10 tw-h-10 tw-rounded-full tw-ml-2"
          />
          <div className="tw-flex tw-flex-col tw-leading-5 tw-ml-2">
            <span className="tw-text-md tw-font-bold">{post?.username}</span>
            <span className="tw-font-normal tw-text-sm ">Rome</span>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className="tw-text-2xl tw-mt-2"
        />
      </div>
      <img src={post?.post_url} className="tw-w-full tw-h-full" />
      <div className="tw-flex tw-justify-between tw-mt-2 tw-px-2">
        <div className="tw-flex">
          <FontAwesomeIcon
            icon={liked ? faHeartSolid : faHeart}
            onClick={incrementLike}
            className="tw-cursor-pointer tw-text-3xl"
          />

          <FontAwesomeIcon
            icon={faComment}
            className="tw-cursor-pointer tw-text-3xl tw-px-4"
          />

          <FontAwesomeIcon
            icon={faShareFromSquare}
            className="tw-cursor-pointer tw-text-3xl"
          />
        </div>
        <FontAwesomeIcon
          icon={faBookmark}
          className="tw-cursor-pointer tw-text-3xl"
        />
      </div>
      <span className="tw-px-2">
        Liked By <b>Aman Kadam </b> and <b>{likes} others </b>
      </span>
      <div className="tw-flex tw-px-2">
        <span>
          <span className="tw-mr-2">
            <b>{post?.username}</b>
          </span>
          {post?.post_desc}
        </span>
      </div>
      <span
        onClick={() => router.push(`/comments/${post?.id}`)}
        className="tw-cursor-pointer tw-text-gray-700 hover:tw-underline tw-px-2 tw-inline-block tw-mt-2"
      >
        View all comments
      </span>
    </div>
  );
};

export default PostPage;
