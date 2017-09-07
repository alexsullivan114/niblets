package posts

interface PostProvider {
    fun loadPosts(): List<Post>
}