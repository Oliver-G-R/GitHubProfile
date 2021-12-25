export const getUserData = async (username) => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        const data = await response.json();

        if(!data.message){
            return data
        } 

        return null

    }catch{
        return false;
    }
}