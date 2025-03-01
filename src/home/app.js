import { DomManager } from "./DomManager.js";


try {
    const dom = new DomManager()
    await dom.init()
    dom.fill()
    
} catch (error) {
    console.log(`somthing went wrong ${error.toString()}`)
}