import * as React from "react";
import { userDetailsI } from "../interfaces/global";

type Props = {
  userDetails: userDetailsI;
};

const UserDetails: React.FunctionComponent<Props> = ({ userDetails }) => {
  const { name, url, category, desc, posts, img_url, followers, following } =
    userDetails;

  const formatter = (number: number) => {
    return Intl.NumberFormat("en-En", {
      maximumSignificantDigits: 3,
      notation: "compact",
    } as any).format(number);
  };

  return (
    <div>
      <section className="tw-flex tw-justify-between tw-bg-gray-200 tw-p-2">
        <span>icon</span>
        <span className="tw-text-base">{name}</span>
        <span>icon</span>
      </section>
      <section className="tw-flex tw-mt-4 tw-justify-center tw-items-center tw-flex-col">
        <div className="tw-max-w-lg">
          <div className="tw-flex">
              <img src={img_url} className="tw-h-24 tw-w-24 tw-ml-6 tw-rounded-full" />
              <div className="tw-mt-2 tw-ml-12">
                <div className="tw-flex tw-flex-1 tw-ml-10 tw-gap-4">
                  <span className="tw-flex tw-flex-col tw-justify-center tw-items-center">
                    <span className="tw-font-bold">
                      {formatter(posts.length)}
                    </span>
                    <span className="tw-text-gray-600">Posts</span>
                  </span>
                  <span className="tw-flex tw-flex-col tw-justify-center tw-items-center">
                    <span className="tw-font-bold">{formatter(followers)}</span>
                    <span className="tw-text-gray-600">Followers</span>
                  </span>
                  <span className="tw-flex tw-flex-col tw-justify-center tw-items-center">
                    <span className="tw-font-bold">{formatter(following)}</span>
                    <span className="tw-text-gray-600">Following</span>
                  </span>
                </div>
                <button className="tw-bg-blue-500 tw-p-1 tw-ml-6 tw-w-64 tw-text-white tw-rounded-lg">Follow</button>
              </div>
          </div>
          <div className="tw-flex tw-mt-4 tw-items-start tw-flex-col tw-flex-wrap">
            <span className="tw-font-bold tw-text-lg">{name}</span>
            <span className="tw-capitalize tw-text-gray-600">{category}</span>
            <span className="">{desc}</span>
            <a
              className="hover:tw-underline tw-text-blue-500"
              href={url}
              target="_blank"
            >
              {url}
            </a>
          </div>
          <span className="tw-flex tw-py-2 tw-justify-center tw-mt-4 tw-text-blue-500 tw-border-t-1 tw-border-b-1 tw-border-gray-500">Call</span>
        </div>
      </section>
    </div>
  );
};

export default UserDetails;
