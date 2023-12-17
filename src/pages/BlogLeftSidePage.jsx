import { useState } from "react";
import BlogLeftSide from "../components/blog-leftSide/BlogLeftSide";
import Loading from "../components/loading/Loading";
import Layout from "../layout/Layout";
import {setLoading} from "../setLoadingFunction"

const BlogLeftSidePage = () => {
  const [isLoading, setIsLoading] = useState(true)
    setLoading(setIsLoading);
  return (
    isLoading ? <Loading /> : (<Layout> <BlogLeftSide /> </Layout>)
    );
};

export default BlogLeftSidePage;