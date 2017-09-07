package controllers

import data.box.BoxRepository
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestMapping
import posts.Post
import javax.servlet.http.HttpServletResponse

@RestController
class HelloController {

    @RequestMapping("/greeting")
    fun foo(response: HttpServletResponse): List<Post> {
        response.setHeader("Access-Control-Allow-Origin", "*")
        return BoxRepository().loadPosts()
    }
}