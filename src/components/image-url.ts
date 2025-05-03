
const getCroppedImageUrl = (url:string)=>{
    const target = 'media/';
    const index = url.indexOf(target) + target.length

    return url.slice(0,index) + 'crop/600/400/' + url.slice(index); //url.slice we can get all the remaining characters
}

export default getCroppedImageUrl