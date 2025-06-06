import noImage from '../assets/no-image-placeholder.webp'

const getCroppedImageUrl = (url:string)=>{
    if(!url) return noImage; //this is for handling games with out image 
    const target = 'media/';
    const index = url.indexOf(target) + target.length

    return url.slice(0,index) + 'crop/600/400/' + url.slice(index); //url.slice we can get all the remaining characters
}

export default getCroppedImageUrl