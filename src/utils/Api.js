

class Api {
    constructor () {
        const api_key = "bcd3c6393606f8cd9ab1c236f6d4e0ea"

        this.baseUrl = "https://api.themoviedb.org/3/"
        this.defaultUrlEnd = "api_key=" + api_key + "&language=ru-RU"
    }
    get = (path) => {
        let url = this.baseUrl + path + this.defaultUrlEnd
        console.log("get", url)
        return fetch(url)
                .then(response => response.json())
                .then(json => json.results)
                .catch(e => {
                    throw e
                }) 
    }
    getRecommendations = (list) => {
        let promises = [];
        list.forEach(element => {
            let type = element.video !== undefined ? "movie" : "tv"
            let path = type + "/" + element.id + "/recommendations?"
            let url = this.baseUrl + path + this.defaultUrlEnd
            promises.push(fetch (url))
        });
        return Promise.all(promises)
    }
    loadGenres = () => {
        let promises = []
        let types = ["tv", "movie"]
        types.forEach(type => {
            let url = this.baseUrl + "genre/" + type + "/list?" + this.defaultUrlEnd
            promises.push(fetch (url))
        })
        return Promise.all(promises)
    }
}


const api = new Api()
export default api;