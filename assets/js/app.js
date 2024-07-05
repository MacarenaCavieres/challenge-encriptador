const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesencriptar = document.querySelector("#btnDesencriptar");
const msgEncript = document.querySelector("#msgEncript");
const btnCopiar = document.querySelector(".main__der__copiar");
const derImg = document.querySelector(".main__der__img");
const derH5 = document.querySelector(".main__der__h5");
const derP = document.querySelector(".main__der__p");
const alert = document.querySelector(".main__izq__alert");
const textArea = document.querySelector("#msgUsuario");

const claves = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};

const valores = [
    {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u",
    },
];

btnEncriptar.addEventListener("click", () => {
    const msgUsuario = textArea.value.trim();
    let encriptado = "";
    idem(msgUsuario);

    for (let j = 0; j < msgUsuario.length; j++) {
        if (claves.hasOwnProperty(msgUsuario[j])) {
            encriptado += claves[msgUsuario[j]];
        } else {
            encriptado += msgUsuario[j];
        }
    }
    msgEncript.textContent = encriptado;
    textArea.value = "";
});

btnCopiar.addEventListener("click", () => {
    console.log("copy");
});

btnDesencriptar.addEventListener("click", () => {
    let msgUsuario = textArea.value.trim();

    idem(msgUsuario);

    Object.entries(claves).forEach(([key, value]) => {
        msgUsuario = msgUsuario.split(value).join(key);
    });

    msgEncript.textContent = msgUsuario;
    textArea.value = "";
});

function idem(msgUsuario) {
    const regex = /^[a-z\s]+$/;
    if (!msgUsuario || !regex.test(msgUsuario)) {
        alert.style.display = "block";
        return;
    } else {
        alert.style.display = "none";
    }

    msgEncript.style.display = "block";
    btnCopiar.style.display = "block";
    derImg.style.display = "none";
    derH5.style.display = "none";
    derP.style.display = "none";
}
