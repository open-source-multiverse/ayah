import { DataManager } from "./DataManager.js";


export class DomManager {

    constructor() {
        this.dataManager = new DataManager()
        this.name = document.querySelector('.name')
        this.enName = document.querySelector('.en-name')
        this.type = document.querySelector('.type')
        this.textAr = document.querySelector('.text-ar') 
        this.textEn = document.querySelector('.text-en')
        this.nextBtn = document.querySelector('.btn-next')
    }
    
    async init() {
        await this.dataManager.fetchData()
    }


    fill() {
        const data = this.dataManager.getData()

        this.name.textContent = data.name.ar
        this.enName.textContent = data.name.en
        this.type.textContent = data.revelation_place
        this.textAr.textContent = this.dataManager.getCurrent().text.ar
        this.textEn.textContent = this.dataManager.getCurrent().text.en
        this.dataManager.setLocalStorage()

        document.title = `سورة ${data.name.ar} (${data.revelation_place})`
    }
}