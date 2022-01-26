import React from "react";
import { blogData } from "../../../data/blogData";
import LightSpeed from "react-reveal/LightSpeed";
import {
  BlogSection,
  BlogHeading,
  BlogWrap,
  Col,
  Img,
  BlogContent,
} from "./styles";
const Blog = () => {
  return (
    <>
      <LightSpeed left>
        <BlogSection id="/Blog">
          <BlogHeading>Blog</BlogHeading>
          <BlogWrap>
            {blogData.map((blog) => {
              return (
                <Col>
                  <Img src={blog.image} alt="#" />
                  <BlogContent>
                    <h3>{blog.why}</h3>
                    <p className="subtitle">{blog.time}</p>
                    <p>{blog.decription}</p>
                  </BlogContent>
                </Col>
              );
            })}
          </BlogWrap>
        </BlogSection>
      </LightSpeed>
    </>
  );
};

export default Blog;
