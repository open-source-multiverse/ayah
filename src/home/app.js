import { DomManager } from "./DomManager.js";

const dom = new DomManager();

try {
  
    dom.preLoad() // this for ui/ux when connection is slow 
    await dom.init()
    dom.fill()
    
} catch (error) 
{
    dom.error();
    // document.body.
    console.log(`somthing went wrong ${error.toString()}`)
}