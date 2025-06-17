import {readFile, writeFile} from "node:fs";
import {resolve} from "node:path";
console.log(process.cwd());
const file= resolve(process.cwd(), "usuarios.json")

export function write(data){
    return new Promise((resolve, reject)=>{
        writeFile(file, JSON.stringify(data, null,2), (error) =>{
        if(error){
            reject(error);
        }
        resolve();
});
});
}

export function get(){
    return new Promise((resolve, rejects) =>{
        readFile(file, "utf-8", (error, data) =>{
            if(error){
                reject(error)
            }
            resolve(JSON.parse(data));
        });
    });
}