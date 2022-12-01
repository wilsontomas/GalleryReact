
export const loadPlaces =[
    {id:1, text:'Ejemplo 1', url:'https://via.placeholder.com/150/92c952.png'},
    {id:2, text:'Ejemplo 2', url:'https://via.placeholder.com/150/8e973b.png'},
    {id:3, text:'Ejemplo 3', url:'https://via.placeholder.com/150/e743b.png'},
    {id:4, text:'Ejemplo 4', url:'https://via.placeholder.com/150/1d2ad4.png'},
    {id:5, text:'Ejemplo 5', url:'https://via.placeholder.com/150/250289.png'},
    {id:6, text:'Ejemplo 6', url:'https://via.placeholder.com/150/afc5c2.png'},

]
const url = 'https://jsonplaceholder.typicode.com/albums/1/photos'
export const loadAlbumById = (id)=>{
    return fetch("https://jsonplaceholder.typicode.com/albums/"+id+"/photos");
}

export const loadPhotoById=(id)=>{
    return fetch("https://jsonplaceholder.typicode.com/photos/"+id);
}
