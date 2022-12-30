const fs = require("fs");
const path = require("path");


let rootPath = "./res";
let extList = [".png",];

function appendFile(filePath){
    let extName = path.extname(filePath);
    if(extList.includes(extName)){
        fs.appendFileSync(filePath," ",function(error){
            if(error){
                console.log("error:",error,filePath);
            }else{
                console.log("success:",filePath);
            }
        });
        console.log("success:",filePath);
    }
}

function getDirs(tempPath){
    let dirs =  fs.readdirSync(tempPath);
    dirs.forEach((dir)=>{
        let pathFull = path.join(tempPath , dir);
        let stat = fs.statSync(pathFull)
        if(stat.isDirectory()){
            getDirs(pathFull);
        }else{
            appendFile(pathFull);
        }
    })
}


function main(){
    console.log("start");
    getDirs(rootPath);



}

main();
