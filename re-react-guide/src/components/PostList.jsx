import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  const addPostHandler = function (postData) {
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
      {posts.length > 0 && (
        <ul className={classes.posts}>
        {posts.map((post) => <Post key={uuidv4()} author={post.author} body={post.body}/>)}
      </ul>
      )}
      {posts.length === 0 && <div style={{textAlign: 'center', color: 'lightgray'}}>
          <h3>아직 작성된 포스트가 없습니다.</h3>
          <p>포스트를 작성해보세요!</p>
        </div>
      }
    </>
  );
}

export default PostList;
