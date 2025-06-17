
import {readFile, writeFile} from "node:fs";
import {resolve} from "node:path";
console.log(process.cwd());
const file= resolve(process.cwd(), "usuarios.json")

await new Promise((resolve, reject)=>{
    writeFile(file, JSON.stringify([{name:"patry", age: 43}]), (error) =>{
    if(error){
        reject(error);
    }
    resolve();
});
});

// escritura
let usuarios= await new Promise((resolve, rejects) =>{
    readFile(file, "utf-8", (error, data) =>{
        if(error){
            reject(error)
        }
        resolve(JSON.parse(data));
    });
});
        console.log(usuarios);