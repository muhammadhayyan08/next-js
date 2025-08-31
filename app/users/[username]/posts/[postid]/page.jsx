const SingleProfilePost = async ({ params }) => {
  const { username, postid } = await params; // ✅ await here

  return (
    <h1>
      user = {username}, PostID: {postid}
    </h1>
  );
};

export default SingleProfilePost;

