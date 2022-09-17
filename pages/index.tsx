import * as React from "react";
import Layout from "../components/Layout";
import UserDetails from "../components/UserDetails";
import { userDetailsI } from "../interfaces/global";
import { NextPage } from "next";
import posts from "../posts";
import PostGrid from "../components/PostGrid";
import { Helmet } from "react-helmet";

const IndexPage: NextPage = () => {
  const userDetails: userDetailsI = {
    name: "Aman Kadam",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    url: "https://google.com",
    category: "blogger",
    img_url:
      "https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_960_720.png",
    followers: 46598,
    following: 125,
    posts: posts,
  };
  // console.log(userDetails);
  return (
    <Layout title="Aman Kadam | Instagram">
      <section>
        <UserDetails userDetails={userDetails} />
        <PostGrid userDetails={userDetails} />
      </section>
    </Layout>
  );
};

export default IndexPage;
