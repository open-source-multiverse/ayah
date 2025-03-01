import BASE_URL, { DataManager } from "./DataManager.js";


export class DomManager {

    constructor() {
        this.dataManager = new DataManager()
        this.main = document.querySelector("main")
        this.name = document.querySelector('.name')
        this.enName = document.querySelector('.en-name')
        this.type = document.querySelector('.type')
        this.textAr = document.querySelector('.text-ar') 
        this.textEn = document.querySelector('.text-en')
        this.nextBtn = document.querySelector('.btn-next')
    }
    
    async init() {

        const response = await fetch(`${BASE_URL}/backgrounds/index.json`)
        
        if (!response.ok)
        {
            throw Error("failed to get the wallpaper")
        }
        const data = await response.json()
        const r = Math.floor(Math.random() * data.length)
        const bg_url = `${BASE_URL}/backgrounds/${data[r]}`
        this.main.style.backgroundImage = `url(${bg_url})`

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
    error()
    {
        this.name.textContent = 'خطأ'
        this.enName.textContent = 'Error'
        this.type.textContent = '❌'
        this.textAr.textContent = 'تأكد من أن جهازك متصل بالإنترنت بشكل صحيح'
        this.textEn.textContent = 'Ensure that your device is properly connected to the internet'
        this.dataManager.setLocalStorage()
    }

    preLoad() {
        this.name.textContent = 'جاري التحميل...';
        this.enName.textContent = 'Loading...';
        this.type.textContent = '⏳';
        this.textAr.textContent = 'جاري تحميل البيانات، الرجاء الانتظار...';
        this.textEn.textContent = 'Loading data, please wait...';
    }

}