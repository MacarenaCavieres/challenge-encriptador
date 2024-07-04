const btnEncriptar = document.querySelector("#btnEncriptar");

const arrayEncript = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};

// btnEncriptar.addEventListener("click", () => {
//     const msgUsuario = document.querySelector("#msgUsuario").value;
//     let resultado = "";

//     for (let i = 0; i < msgUsuario.length; i++) {
//         if (msgUsuario[i].includes("a")) {
//             const encript = arrayEncript.a;
//             resultado += encript;
//         } else {
//             resultado += msgUsuario[i];
//         }
//     }
//     console.log(resultado);
// });

// btnEncriptar.addEventListener("click", () => {
//     const msgUsuario = document.querySelector("#msgUsuario").value;

//     const arrayMsg = msgUsuario.split("");
//     const msgEncript = arrayMsg.map((item) => {
//         if (item === "a") {
//             item = "ai";
//         } else {
//             item;
//         }
//         return item;
//     });

//     const stringMsg = msgEncript.join("");
//     console.log(stringMsg);
// });

btnEncriptar.addEventListener("click", () => {
    const msgUsuario = document.querySelector("#msgUsuario").value;
    let encriptado = "";

    for (let j = 0; j < msgUsuario.length; j++) {
        if (arrayEncript.hasOwnProperty(msgUsuario[j])) {
            encriptado += arrayEncript[msgUsuario[j]];
        } else {
            encriptado += msgUsuario[j];
        }
    }
    console.log(encriptado);
});
