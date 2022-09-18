import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Comment from "../../components/Comment";
import { CommentI } from "../../interfaces/global";
import posts from "../../posts";
type Props = {
  comments: CommentI[];
};
const CommentPage: NextPage<Props> = (props) => {
  const [comments, setCmts] = useState(props?.comments);
  const [cmtText, setCmtText] = useState("");
  const router = useRouter();
  const handleCmtClick = (event: any) => {
    event.preventDefault();
    const cmt = [
      {
        text: cmtText,
        user_name: "aman_kadam",
        user_img:
          "https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png",
      },
    ];
    const newComments = [...comments, ...cmt];
    setCmts(newComments);
    setCmtText("");
    setTimeout(() => {
      const ele = document.getElementById("comments") as any;
      window.scrollTo(0, ele.scrollHeight);
    }, 1);
  };
  const handleInputChange = (event: any) => {
    setCmtText(event.target.value);
  };
  return (
    <div className="tw-container tw-mx-auto tw-max-w-lg tw-px-2 tw-h-screen tw-flex tw-flex-col">
      <div className="tw-flex tw-sticky tw-top-0 tw-bg-gray-200 tw-border-b-1 tw-border-gray-600">
        <FontAwesomeIcon
          icon={faArrowAltCircleLeft}
          onClick={() => router.back()}
          className="tw-text-3xl tw-mt-1 tw-ml-1 tw-cursor-pointer"
        />
        <div className="tw-flex tw-justify-center tw-w-full tw-text-2xl">
          Comments
        </div>
      </div>
      <div key={comments.length} className="tw-flex-1" id="comments">
        {comments?.map((comment: CommentI, idx: any) => (
          <Comment
            key={idx}
            text={comment.text}
            username={comment.user_name}
            user_img={comment.user_img}
          />
        ))}
      </div>
      <div
        id="cmt-box"
        className="tw-sticky tw-bottom-0 tw-z-10 tw-bg-white tw-flex tw-border-gray-400 tw-border-t-1"
      >
        <FontAwesomeIcon
          icon={faArrowUpLong}
          className="tw-p-4 tw-text-gray-400"
        />
        <input
          type="text"
          name="comment"
          value={cmtText}
          onChange={handleInputChange}
          className="tw-outline-none tw-flex-1"
        />
        <button
          onClick={handleCmtClick}
          disabled={!cmtText.trim()?.length}
          className="tw-text-blue-500 tw-outline-none disabled:tw-opacity-25 tw-pl-2"
        >
          Post
        </button>
      </div>
    </div>
  );
};
export default CommentPage;

export const getServerSideProps = (context: any) => {
  const { id } = context.params;
  const comments = posts.find((e) => e.id === +id)?.comments || [];
  return {
    props: {
      comments: comments,
    },
  };
};
