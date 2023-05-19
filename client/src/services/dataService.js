let properties = [
    {
        _id: "123xz01",
        title: 'Mazda 3 2023',
        price: 12300.00,
        engine: '2.5L',
        hp: 191,
        lbft: 186,
        category: "Hatchback",
        image: "mazda-3-2023.png"
    },
    {
        _id: "123xz02",
        title: 'M.GLE 63 Coupe',
        price: 43100.00,
        engine: '4.0L',
        hp: 612,
        lbft: 184,
        category: "SUV",
        image: "mercedez-amg-gle-63-couope.png"
    },
    {
        _id: "123xz03",
        title: 'Nissan Z',
        price: 232000.00,
        engine: '4.0L',
        hp: 400,
        lbft: 250,
        category: "Coupe",
        image: "nissan-z-2023.png"
    },
    {
        _id: "123xz04",
        title: 'Honda CRV',
        price: 250000.00,
        engine: '3.0L',
        hp: 270,
        lbft: 180,
        category: "SUV",
        image: "honda-cvr-2023.png"
    },
    {
        _id: "123xz05",
        title: 'Honda Accord',
        price: 400000.00,
        engine: '3.5L',
        hp: 180,
        lbft: 100,
        category: "Sedan",
        image: "honda-accord-2023.png"
    },
    {
        _id: "123xz06",
        title: 'Ford Territory',
        price: 250000.00,
        engine: '2.8L',
        hp: 180,
        lbft: 120,
        category: "SUV",
        image: "ford-territory-2023.png"
    },
    {
        _id: "123xz06",
        title: 'BMW X3',
        price: 250000.00,
        engine: '4.0L',
        hp: 180,
        lbft: 120,
        category: "SUV",
        image: "bmw-x3-2023.webp"
    },
    {
        _id: "123xz06",
        title: 'BMW X6',
        price: 250000.00,
        engine: '3.8L',
        hp: 180,
        lbft: 120,
        category: "SUV",
        image: "bmw-x6-2023.webp"
    },
]
class DataService{

    getProducts(){

        return properties;

        //
    }


}
export default DataService;