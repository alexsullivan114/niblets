package controllers

import data.BoxRepository
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestMapping

@RestController
class HelloController {

    @RequestMapping("/greeting")
    fun foo(): String {
        val folder = BoxRepository().rootFolder()
        var string = ""
        folder.forEach { string += it.name }
        return string
    }
}