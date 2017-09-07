package data.box

import com.box.sdk.BoxItem
import posts.Post

fun BoxItem.Info.toPost(): Post {
    val id = sequenceID
    val message = name ?: "Unknown description"
    val author = createdBy?.hostname ?: "Unknown author"

    return Post(id, message, author)
}