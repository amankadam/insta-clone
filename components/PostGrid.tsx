import * as React from "react";
import { userDetailsI } from "../interfaces/global";
import { useRouter } from "next/router";

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
      <div className="post_switch tw-flex  tw-items-center tw-justify-between tw-py-2 tw-border-b-1 tw-border-gray-500">
        <span>icon</span>
        <span>icon</span>
        <span>icon</span>
      </div>
      <section className="tw-grid tw-grid-cols-3 tw-gap-1">
        {posts.map((post) => {
          return (
              <img
                onClick={() => onImageClick(post.id)}
                src={post.post_url}
                className="tw-h-full tw-w-full tw-cursor-pointer"
              />
          );
        })}
      </section>
    </div>
  );
};
export default PostGrid;
