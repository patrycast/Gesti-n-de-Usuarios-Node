import {write, get} from "./manager.js"
import { input, editor, select, confirm, Separator } from "@inquirer/prompts"

write([{usuario:"pepito", clave:"1234"}]);
const usuarios= await get();
// console.log(usuarios);

async function main(){
    let run= true;
    console.log("Bienvenidos al sistema");

    //verificar al usuario antes de las funciones
    const usuario= await input({
        message: "Ingrese el usuario",
    });
    const clave= await input({
        message: "Ingrese la clave",
    });
    const existe= usuarios.some((u) => u.usuario === usuario && u.clave === clave);

    if(!existe){
        console.log("Usuario no encontrado");
        return;
    }

    while(run){
        const opcion= await select({
            message: "Seleccione una opcion:",
            choices: [
                {title: "Agregar Usuario", value: "agregar"},
                {title: "Listar Usuarios", value: "listar"},
                {title: "verificar Usuarios", value: "verificar"},
                {title: "Eliminar Usuarios", value: "eliminar"},
                new Separator(),
                {title: "Salir", value: "salir"},
            ],
    })
    let usuarios= await get();
    switch(opcion){
        case "agregar":
            const usuario= await input ({
                message: "Ingrese el usuario",
            });
            const clave= await input({
                message: "Ingrese la clave",
            });
            // await write ([...(await get()), {usuario, clave}]);
            // break;
            const existe= usuarios.some((u)=> u.usuario === usuario);
            if(existe){
                console.log("El usuario ya existe");
                break;
            }
            usuarios.push({usuario, clave});
            await write([...usuarios]);
            break;
        case "listar":
            
            console.table(usuarios);
            break;
        case "salir":
            run= false;
            break;     
            
        case "verificar":
            const usuarioVerificar= await input({
                message: "Ingrese el usuario a verificar",
            })
            
            if(usuarios.some((u) => u.usuario ===usuarioVerificar)){
                console.log("El usuario existe");
                const clave= await input({
                    message:"ingrese la clave"
                });
                if(usuarios.some((u) => u.clave === clave)){
                    console.log("La clave es correcta");
                }else{
                    console.log("La clave es incorrecta")
                }
            }else{
                console.log("El usuario no existe")
            }
            break;

        case "eliminar":
            const usuarioEliminar= await input({
                message: "Ingrese el usuario a eliminar",
            });
            const confirmacion= await confirm({
                message: "Estas seguro que quieres eliminar al usuario?",
            });
            if (confirmacion){
                usuarios= usuarios.filter((u) => u.usuario !== usuarioEliminar);
                await write([...usuarios]);
                console.log("Usuario eliminado");
            }
            break;
    }
}
console.log("Vuelva pronto");
}

main();


