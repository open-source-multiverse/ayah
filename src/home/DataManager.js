
export class DataManager {

    constructor() {
        this.api = "http://localhost:3000/api/ayah/"
        this.cache = null
        this.verse = 0
        this.sura = 1
        this.getLocalStorage() 
    }

    getLocalStorage() {
        let vers = window.localStorage.getItem('verse')
        let sura = window.localStorage.getItem('sura')
        if (
            vers === null || 
            sura === null || 
            parseInt(sura) > 114 || 
            parseInt(sura) < 1 ||
            isNaN(parseInt(sura)) ||
            isNaN(parseInt(vers))
        ) {
            vers = 0
            sura = 1;
        }
        this.verse = parseInt(vers)
        this.sura = parseInt(sura)
    }
    
    setLocalStorage() {
        if (this.verse + 1 >= this.cache.verses.length) {
            this.verse = 0;
            this.sura += 1;
            if (this.sura > 114) {
                this.sura = 1;
            }
        } else {
            this.verse += 1
        }
        window.localStorage.setItem('sura', this.sura)
        window.localStorage.setItem('verse', this.verse)
    }

    async fetchData() {
        const response = await fetch(`${this.api}${this.sura}.json`)

        if (!response.ok) {
            throw Error("file not found")
        }

        const data = await response.json()

        this.cache = data
    }

    getData() {
        return this.cache
    }

    getCurrent() {
        return this.cache.verses[this.verse] || this.cache.verses[0]
    }

}