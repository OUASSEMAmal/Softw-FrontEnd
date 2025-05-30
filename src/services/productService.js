
const apiUrl = process.env.REACT_APP_API_URL;

export const getAllProducts = async () => {
    try{
        console.log(apiUrl);
        const response = await fetch(`${apiUrl}/products`, {
            method: 'GET',
        })
        console.log(response);
        if(!response.ok){
            throw new Error('Cannot get all products');
        }
        return await response.json();
    }
    catch(err){
        console.log(err);
        throw err;
    }
}