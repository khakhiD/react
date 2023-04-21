import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  const addPostHandler = async function (postData) {
    await fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("성공: ", data))
      .catch((e) => console.error("실패: ", e));
    // 새로 만든 포스트가 배열 첫 번째에 들어가고,
    // 그 뒤로 원래 있던 포스트가 들어간다.
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={uuidv4()} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "lightgray" }}>
          <h3>아직 작성된 포스트가 없습니다.</h3>
          <p>포스트를 작성해보세요!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: 'center', color: 'white'}}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default PostList;
