export const getGifs = async( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=FZmgUeYCQ5bwD3QztyqKe8Tu26TOhvhk&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url 
    }));
    console.log(gifs);
    return gifs;
}