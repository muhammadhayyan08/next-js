    const SingleProfilePost = async (props)=> {
        const user = await props.params;
        console.log(user)

        return <h1>user = {user.username},PostID:{ user.postID}</h1>
    }

    export default SingleProfilePost;