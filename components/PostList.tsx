import { PostMeta } from "@/lib/types";
import PageLayout from "@/layouts/PageLayout";
import PostListLayout from "@/layouts/PostListLayout";
import React from "react";

const PostList = ({ posts }: { posts: PostMeta[] }) => {
  return (
    <PageLayout page={"blog"}>
      <h1
        className={"pt-12 text-5xl font-bold text-dark-900 dark:text-dark-100"}
      >
        Posts
      </h1>
      <PostListLayout posts={posts} />
    </PageLayout>
  );
};

export default PostList;
