// import React, { useEffect, useState } from "react";

// export const useJazzyNews = () => {
//   const [posts, setPosts] = useState({});
//   const addPost = (post) => setPosts((allPosts) => [post, ...allPosts]);

//     useEffect(() => {
//       newsFeed.subscribe(addPost);
//       return () => newsFeed.unsubscribe(addPost);
//     }, []);

//     useEffect(() => {
//       welcomeChime.play();
//       return () => goodbyeChime.play();
//     }, []);

//   return posts;
// };

// export const NewsFeed = ({ url }) => {
//   const posts = useJazzyNews();

//   return (
//     <>
//       <h1>{posts.length} articles</h1>
//       {posts.map((post) => (
//         <Post key={post.id} {...post} />
//       ))}
//     </>
//   );
// };
