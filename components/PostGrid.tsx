import * as React from "react";
import { userDetailsI } from "../interfaces/global";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faGrin } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type Props = {
  userDetails: userDetailsI;
};

const PostGrid: React.FunctionComponent<Props> = ({ userDetails }) => {
  const { posts } = userDetails;
  const router = useRouter();
  const onImageClick = (id: number) => {
    router.push(`/post/${id}`);
  };
  return (
    <div>
      <div className="post_switch tw-flex  tw-items-center tw-justify-around tw-py-2 tw-border-b-1 tw-border-gray-500">
        <FontAwesomeIcon icon={faGrin} className="tw-text-2xl" />
        <FontAwesomeIcon icon={faBars} className="tw-text-2xl" />
        <FontAwesomeIcon icon={faAddressBook} className="tw-text-2xl" />
      </div>
      <section className="tw-grid tw-grid-cols-3 tw-gap-1">
        {posts.map((post, idx) => {
          return (
            <img
              key={idx}
              onClick={() => onImageClick(post.id)}
              src={post.post_url}
              className=" tw-w-full tw-h-24 tw-cursor-pointer"
            />
          );
        })}
      </section>
    </div>
  );
};
export default PostGrid;
