import {
    updateQuery,
    searchQuery,
} from '../query/index.js'

export const searchAnime = async(input) => {
    try {
        const variables  = {
            search: input,
            type: "ANIME",
        }

        const response = await fetch("https://graphql.anilist.co", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: searchQuery, variables }),
        });

      const data = await response.json();
      return data.data.Page.media;

    } catch (error) {
      console.log("Error in searching data",error);  
    }
}

export const updateAnime = async(variables) => {
    try {
        
        // get token from local storage
        const accessToken = localStorage.getItem('accessToken');

        const response = await fetch('https://graphql.anilist.co', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ query: updateQuery, variables }),
        })

        const data = await response.json();
        return data?.data?.SaveMediaListEntry;

    } catch (error) {
        console.log("Error in updating data",error);
    }
}

