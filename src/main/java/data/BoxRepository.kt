package data

import com.box.sdk.BoxAPIConnection
import com.box.sdk.BoxFolder

class BoxRepository {
    fun rootFolder(): BoxFolder {
        val api = BoxAPIConnection("")
        return BoxFolder.getRootFolder(api)
    }
}