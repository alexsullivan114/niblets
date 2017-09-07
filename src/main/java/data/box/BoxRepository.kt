package data.box

import com.box.sdk.BoxAPIConnection
import com.box.sdk.BoxFolder
import posts.Post
import posts.PostProvider
import java.util.stream.StreamSupport
import kotlin.streams.toList

class BoxRepository: PostProvider {
    val api = BoxAPIConnection("")
    fun rootFolder(): BoxFolder {

        return BoxFolder.getRootFolder(api)
    }

    override fun loadPosts(): List<Post> {
        val root = BoxFolder.getRootFolder(api)
        return StreamSupport.stream(root.spliterator(), false)
                .map { it.toPost() }
                .toList()
    }
}