import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions/posts.action";

const Posts = () => {
  const dispatch = useDispatch();

  // Calling an action in useEffect hook via dispatch hook
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // Getting data from redux global state via useSelector hook from react-redux plugin
  const posts = useSelector((state) => state?.posts?.postData?.data);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((posts, index) => (
            <>
              <tr key={index}>
                <td>{posts.id}</td>
                <td>{posts.userId}</td>
                <td>{posts.title?.substring(0, 50) + "..."}</td>
                <td>{posts.body?.substring(0, 50) + "..."}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Posts;
