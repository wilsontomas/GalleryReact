import Cover from '../assets/Recursos2/listaAlbumes/coverAlbum1.svg'
import Imagen1 from '../assets/Recursos2/listaAlbumes/previewPhoto1.svg'
import Imagen2 from '../assets/Recursos2/listaAlbumes/previewPhoto2.svg'
import Imagen3 from '../assets/Recursos2/listaAlbumes/previewPhoto3.svg'
import Imagen4 from '../assets/Recursos2/listaAlbumes/previewPhoto4.svg'

export const recentData = [
    {
        index: 1, image: Cover, name:'Wilson'
    },
    {
        index: 2,  image: Imagen1, name:'Tomas'
    },
    {
        index: 3, image:  Imagen2, name:'Eduardo'
    },
    {
        index: 4,  image:  Imagen3, name:'Alcantara'
    },
    {
        index: 5, image: Imagen4, name:'Yarida'
    },
    

];
export function getImageData(){
    let mappedData = [];
    recentData.forEach(x=>{
        mappedData.push(x)
    });

    return mappedData;

}
export const testData = [
    {
        index: 1, link: '', image: 'recentAlbum1.jpg'
    },
    {
        index: 2, link: '', image: 'recentAlbum2.jpg'
    },
    {
        index: 3, link: '', image: 'recentAlbum3.jpg'
    },
    {
        index: 4, link: '', image: 'recentAlbum4.jpg'
    },
    {
        index: 5, link: '', image: 'recentAlbum1.jpg'
    },
    

];

