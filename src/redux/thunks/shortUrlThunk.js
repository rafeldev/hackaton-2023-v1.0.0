import { createNewShortUrl } from "../../services/short-url/create.short_url.service"

export const createShortUrl = (title, url) => {
    return async(dispatch, getState) => {
        try {

            const uid = getState().auth.uid;

        
            const shortUrl = await createNewShortUrl(title, url);
        } catch (error) {
            console.log(error)
        }
    }
}