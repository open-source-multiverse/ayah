// const api_url = "http://localhost:3000/api/ayah/"

import { DomManager } from "./DomManager.js";

// function setData(className, value) {
//     const domElm = document.querySelector(className)

//     if (domElm && value) {
//         domElm.textContent = value
//     } else {
//         throw Error("dom element not found or value not found")
//     }
// }

// function setLocalStorage(key, value) {
//     window.localStorage.setItem(key, value)
// }

// function getLocalStorage(key) {
//     const value = window.localStorage.getItem(key)
//     if (!value) return value;
//     return parseInt(value)
// }

// async function fill(sura_id, verse_id) {
//     const response = await fetch(`${api_url}${sura_id}.json`)

//     if (!response.ok) {
//         throw Error("file not found")
//     }

//     const data = await response.json()

//     setData('.name', data.name.ar)
//     setData('.en-info', data.name.en)
//     setData('.type', data.revelation_place)
//     setData('.text-ar', data.verses[verse_id].text.ar)
//     setData('.text-en', data.verses[verse_id].text.en)


//     if (verse_id + 1 >= data.verses.length)
//     {
//         setLocalStorage('verses_progress', 0)
//         if (sura_id + 1 >= 114)
//         {
//             setLocalStorage('sura_progress', 0)
//         } 
//         else
//         {
//             setLocalStorage('sura_progress', sura_id + 1)
//         }
//     }
//     else
//     {
//         setLocalStorage('verses_progress', verse_id + 1)
//     } 
    
// }



// let verses_progress = getLocalStorage('verses_progress')
// let sura_progress = getLocalStorage('sura_progress')


// if (verses_progress === null || sura_progress === null) {
//     verses_progress = 1;
//     sura_progress = 1;
//     setLocalStorage('verses_progress', verses_progress)
//     setLocalStorage('sura_progress', sura_progress)
// }

// fill(sura_progress, verses_progress)


// const menubtn = document.querySelector('.menu-btn')
// const menubody = document.querySelector('.my-menu')
// const nextBtn = document.querySelector('.btn-next')
// const prevBtn = document.querySelector('.btn-prev')

// function toggleMenu(action) {
//     switch (action) {
//         case true:
//             menubody.classList.remove('hidden')
//             menubody.classList.add('block')
//             break;
//         case false:
//             menubody.classList.remove('block')
//             menubody.classList.add('hidden')
//             break;
//     }
// }



// menubtn.addEventListener('click', () => {
//     toggleMenu(true)
// })

// document.addEventListener('click', (e) => {
//     if (!menubody.contains(e.target) && !menubtn.contains(e.target)) {
//         toggleMenu(false)
//     }

//     if (nextBtn.contains(e.target) || prevBtn.contains(e.target)) {
//         let verse_progress = getLocalStorage('verses_progress')
//         let sura_progress = getLocalStorage('sura_progress')

//         if (nextBtn.contains(e.target)) {
//             fill(sura_progress, verse_progress)
//         } else {
//             if (verse_progress - 2 < 0) {
//                 sura_progress -= 1;
//                 if (sura_progress < 0) return;
                
//             }

//             fill(sura_progress, verse_progress - 2)

//         }
//     }
// })

const dom = new DomManager()
await dom.init()
dom.fill()