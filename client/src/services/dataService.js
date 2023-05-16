let properties = [
    {
        _id: "123xz01",
        title: 'Kayak Vallarta',
        price: '12300.00',
        sizeArea: '240',
        bath: 2,
        bed: 2,
        category: "forRent",
        image: "https://www.kayakvallarta.com/wp-content/uploads/2023/02/3-1.gif"
    },
    {
        _id: "123xz02",
        title: 'Mar Azul Plaza',
        price: '43100.00',
        sizeArea: '240',
        bath: 2,
        bed: 2,
        category: "forSale",
        image: "https://www.mauivallarta.com/wp-content/uploads/2022/12/lateral-Grande-584x438.jpg"
    },
    {
        _id: "123xz03",
        title: 'Verde Mar Vallarta',
        price: '232000',
        sizeArea: '242',
        bath: 2,
        bed: 2,
        category: "forSale",
        image: "https://www.verdemarpv.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2020-12-01-at-11.03.14-AM-3-1-p973dyt5tr2lct23ocnntxuzkhd5v30kfj4utpsvmo.jpeg"
    },
    {
        _id: "123xz04",
        title: 'Alcal Puerto Vallarta',
        price: '250000',
        sizeArea: '240',
        bath: 2,
        bed: 2,
        category: "forRent",
        image: "https://alcal.mx/wp-content/uploads/2023/04/FACHADA-PLAYA-1024x788.jpg"
    },
    {
        _id: "123xz05",
        title: 'ArtWalk Puerto Vallarta',
        price: '400000',
        sizeArea: '150',
        bath: 2,
        bed: 2,
        category: "forRent",
        image: "https://artwalkpv.com/wp-content/uploads/2023/04/IL2_12-Foto-400x225.jpg"
    },
    {
        _id: "123xz06",
        title: 'Mar Azul Bucerias',
        price: '250000.00',
        sizeArea: '120',
        bath: 2,
        bed: 2,
        category: "forRent",
        image: "https://marazulbucerias.com.mx/wp-content/uploads/2022/09/azotea3-1536x864.jpg"
    }
]
class DataService{

    getProducts(){

        return properties;

        //
    }


}
export default DataService;