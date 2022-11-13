
let car = {
    mark: "prompt('car mark')",
    color: "prompt('color')",
    engine: "prompt('engine force')",
    year: "prompt('year')",
    hasHatch: "confirm('hatch')",
    isBox: "confirm('automat or mechanic')",
    price: "prompt('price')"
}

let cars = [
    {
        id: Math.random(),
        mark: "bmw",
        color: "white",
        engine: "1.5",
        year: 2014,
        hasHatch: true,
        isBox: true,
        price: 180000,
        img: 'https://kolesa-uploads.ru/-/24165599-a9d1-4e6d-aeab-6b873972da6c/bmw-i8-1.jpg'
    },
    {
        id: Math.random(),
        mark: "camry",
        color: "black",
        engine: "V6",
        year: 2017,
        hasHatch: true,
        isBox: false,
        price: 35000,
        img: 'https://a.d-cd.net/f05f5bes-960.jpg'
    },
    {
        id: Math.random(),
        mark: "tesla",
        color: "white",
        engine: "electro",
        year: 2020,
        hasHatch: true,
        isBox: true,
        price: 170000,
        img: 'https://cdna.artstation.com/p/assets/covers/images/014/856/578/large/alberto-luque-c-13-8k-pequena.jpg?1545931509'
    },
    {
        id: Math.random(),
        mark: "lamborgini",
        color: "orange",
        engine: "v12",
        year: 2022,
        hasHatch: true,
        isBox: true,
        price: 200000,
        img: "https://i.playground.ru/i/pix/2543123/image.jpg"
    },
    {
        id: Math.random(),
        mark: "bmw",
        color: "blue",
        engine: "V10-cylinder engine",
        year: 2014,
        hasHatch: false,
        isBox: true,
        price: 80000,
        img: "https://1gai.ru/uploads/posts/2013-12/1386967351_new-bmw-m3-sedan-192.jpg"
    },
    {
        id: Math.random(),
        mark: "lotus",
        color: "red",
        engine: "2ZZ-GE",
        year: 2018,
        hasHatch: false,
        isBox: true,
        price: 100000,
        img: "https://wroom.ru/i2/carpic/10044.jpg"
    },
    {
        id: Math.random(),
        mark: "malibu 2",
        color: "black",
        engine: "Facelift 1.5 LT",
        year: 2019,
        hasHatch: true,
        isBox: true,
        price: 24900,
        img: "https://car24.uz/wp-content/uploads/2019/11/photo5238192627768210177.jpg"
    },
    {
        id: Math.random(),
        mark: "toyota",
        color: "white",
        engine: "v8",
        year: 2021,
        hasHatch: true,
        isBox: true,
        price: 60000,
        img: "https://motor.ru/thumb/908x0/filters:quality(75):no_upscale()/imgs/2021/01/29/09/4483637/d7be1e5c6dc4ab68c0a16b4e15ffd31364b68e7f.jpg"
    },
    {
        id: Math.random(),
        mark: "spark",
        color: "green",
        engine: "M300",
        year: 2018,
        hasHatch: false,
        isBox: true,
        price: 10050,
        img: "https://quto.ru/service-imgs/4c/03/ca/a7/4c03caa704002.jpeg"
    },
    {
        id: Math.random(),
        mark: "toyota",
        color: "white",
        engine: "v8",
        year: 2021,
        hasHatch: true,
        isBox: true,
        price: 60000,
        img: "https://motor.ru/thumb/908x0/filters:quality(75):no_upscale()/imgs/2021/01/29/09/4483637/d7be1e5c6dc4ab68c0a16b4e15ffd31364b68e7f.jpg"
    },
    {
        id: Math.random(),
        mark: "tico",
        color: "black",
        engine: "suzuki alto",
        year: 1988,
        hasHatch: false,
        isBox: false,
        price: 10000,
        img: "https://s.auto.drom.ru/i24198/c/photos/generations/500x_daewoo_tico_g5931.jpg?559589"
    },
    {
        id: Math.random(),
        mark: "matiz",
        color: "yellow",
        engine: "daewoo f8CV",
        year: 2005,
        hasHatch: false,
        isBox: false,
        price: 15000,
        img: "https://autoreview.ru/images/Article/1649/Article_164980_860_575.jpg"
    },
    {
        id: Math.random(),
        mark: "Mercedes",
        color: "sky-blue",
        engine: "v10",
        year: 2020,
        hasHatch: false,
        isBox: true,
        price: 107000,
        img: "https://s.auto.drom.ru/i24219/c/photos/generations/500x_mercedes-benz_amg_gt_g8242.jpg?796841"
    },
    {
        id: Math.random(),
        mark: "Audi",
        color: "grey",
        engine: "v8",
        year: 2019,
        hasHatch: false,
        isBox: true,
        price: 69000,
        img: "https://s.auto.drom.ru/img4/catalog/photos/generations/500x_audi_r8_g1265.jpg?109709"
    },
    {
        id: Math.random(),
        mark: "Nissan",
        color: "black",
        engine: "v100",
        year: 2020,
        hasHatch: false,
        isBox: true,
        price: 156000,
        img: "https://s.auto.drom.ru/i24196/c/photos/generations/500x_nissan_gt-r_g4800.jpg?495634"
    },
    {
        id: Math.random(),
        mark: "Kia k5",
        color: "blue",
        engine: "2.6",
        year: 2022,
        hasHatch: true,
        isBox: true,
        price: 30000,
        img: "https://www.autostrada.uz/wp-content/uploads/2020/09/5eddffb2ec05c4da4800002c.jpg"
    },
    {
        id: Math.random(),
        mark: "camaro",
        color: "white",
        engine: "v6",
        year: 2015,
        hasHatch: false,
        isBox: true,
        price: 60000,
        img: "  https://autoartmodels.de/wp-content/uploads/2020/04/71207a-scaled.jpg"
    },
    {
        id: Math.random(),
        mark: "Tesla Plaid",
        color: "white",
        engine: "electric car",
        year: 2022,
        hasHatch: true,
        isBox: true,
        price: 234233,
        img: "  https://www.ixbt.com/img/n1/news/2022/0/1/5f6c5369ec05c4fe2700000f_large.jpg"
    },
    {

        id: Math.random(),
        mark: 'malibu-2-premier',
        color: "white",
        engine: "2.0",
        year: 2022,
        hasHatch: true,
        isBox: true,
        price: 40000,
        img: 'https://apollo-olx.cdnvideo.ru/v1/files/me5ci48ymrec-UZ/image;s=2000x1335'
    },
    {
        id: Math.random(),
        mark: 'Mersedes-gelik',
        color: 'black',
        engine: 'v12',
        year: 2020,
        hasHatch: true,
        isBox: true,
        price: 200000,
        img: 'https://krot.info/uploads/posts/2021-10/1634347714_58-krot-mobi-p-mersedes-gelik-mashini-krasivo-foto-58.jpg'
    },
    {
        id: Math.random(),
        mark: 'kopeyka',
        color: 'black',
        engine: 1.2,
        year: 1980,
        hasHatch: true,
        isBox: true,
        price: 2000,
        img: 'https://krot.info/uploads/posts/2021-10/1634347714_58-krot-mobi-p-mersedes-gelik-mashini-krasivo-foto-58.jpg'
    }
]


// let avlblPrice = cars.filter(item => item.price <= car.price)
// let markchoice = avlblPrice.filter(item => item.mark.toLowerCase() == car.mark.toLowerCase())

// if (markchoice.length === 0) {
//     let qst = confirm(`
//         Хотите машины других марок которые подходят под ваш бюджет?
//     `)
//     let arr = []
//     avlblPrice.filter(i => arr.push(i.mark))

//     if (qst) {
//         let mark = prompt(`Выберите одну из них ${arr}`)

//         let finded = avlblPrice.find(item => item.mark === mark)

//         let isIt = confirm(`
//             Вы выбрали эту машину

//             Mark: ${finded.mark}
//             Color: ${finded.color}
//             Engine: ${finded.engine}
//             Has hatch: ${finded.hasHatch}
//             Is box: ${finded.isBox}
//             Year: ${finded.year}
//             Price: ${finded.price}

//             Вы уверены что хотите купить эту машину за ${finded.price}?
//         `)

//         if (isIt) {
//             let cashOut = prompt('Put money here! ' + finded.price)

//             if (cashOut === finded.price) {
//                 alert('Good car is yours')
//             } else if (cashOut < finded.price) {
//                 alert(`not enaugh money ${finded.price - cashOut}`)
//             } else if (cashOut > finded.price) {
//                 alert(`there are too much money take your sdachi ${cashOut - finded.price}`)
//             } else {
//                 alert('Ты дибил!')
//             }
//         } else {
//             alert('Голову не морочь даа')
//         }
//     }
// }

let max = cars.reduce((a, b) => a.price > b.price ? a : b);


cars.forEach(item => {
    let prc = item.price * 100 / max.price

    document.write(`
        <div class = "block">
            <h3>car id: ${item.id}</h3>

            Mark: <b>${item.mark}</b>  <i style = "color: ${item.color};">${item.color}</i>  <br>
            Hashatch: <b>${item.hasHatch}</b> <br>
            Is box: <b>${item.isBox}</b> <br>
            <img  src="${item.img}" alt = "${item.mark}" /> <br>

            <div class = "price">
                <div class = "fill"  style = "width: ${prc}% ;"></div>
            </div>
        </div>
    `)
})

setTimeout(() => {
    prompt('which car')
}, 3000);