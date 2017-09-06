package data

import com.box.sdk.BoxAPIConnection
import com.box.sdk.BoxFolder

class BoxRepository {
    fun rootFolder(): BoxFolder {
        val api = BoxAPIConnection("XnLarjmXIbr1SgenZBFnmxeXxsEzReSV")
        return BoxFolder.getRootFolder(api)
    }
}