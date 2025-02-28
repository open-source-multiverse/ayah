// const fs = require('fs');
import fs from 'fs'; 


try {
  
    const data = fs.readFileSync('../database.json', 'utf8');
    const obj = JSON.parse(data);
    let index = 1; 
for(let item of obj)
    {
    
        const name = `${index}.json`;
        const revelation_place = item.revelation_place.ar;
        delete  item.audio;

         item.name.en = item.name.transliteration;
        delete  item.name.transliteration;
        delete  item.name.transliteration;
        delete item.revelation_place;
        delete item.words__count;
        delete item.letters__count;

        item.revelation_place = revelation_place;
        console.log(item)
            console.log(item.name.en,name);
              fs.writeFileSync(name,JSON.stringify(item,null, 2), 'utf8');
            index++;
            // break;
    }


  console.log('File contents:', "done");
} catch (err) {
  console.log('Error reading file:', err);
}
