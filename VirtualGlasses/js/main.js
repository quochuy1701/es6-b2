let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];
const loadGlasses = () => {
    let content = dataGlasses.map((glasses) => {
        return ` <div class=col-4 onclick="setGlasses('${glasses.id}')">
            <img src="${glasses.src}" style="width:100%">
        </div>`

    })
    document.getElementById("vglassesList").innerHTML = content.join("");
}
loadGlasses();
const setGlasses = (id) => {
    let viTri= timVitri(id);
    let glasses ={};
    if( viTri > -1){
        glasses = dataGlasses[viTri];
        // console.log(glasses);
    }
    let content = `
        <div>
            <img src="${glasses.virtualImg}">
        </div>
    `
    let content1 = ` 
            <div class="text" style="color:#fff">${glasses.name} - ${glasses.brand}(${glasses.color})</div>
            <div class="text"  style="background-color:red;width:8%; margin:10px 0">${glasses.price}</div>
            <div class="text">${glasses.description}</div>
        </div>
    `
    document.getElementById("glassesInfo").innerHTML = content1;
    document.getElementById("avatar").innerHTML = content;
}
window.setGlasses = setGlasses;
const timVitri = (id) => {
    return dataGlasses.findIndex(function (glasses) {
    return glasses.id == id;
    })
}

