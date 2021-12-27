import data from "../../assets/data.json"

export const dataSort =(type) =>{


    const sortedData = []
for (let i= 0; i<data.entries.length; i++){
    if (data.entries[i].releaseYear>=2010  && data.entries[i].programType === type ){
        sortedData.push(data.entries[i])
    } 
    sortedData.sort((a,b)=>a.title.localeCompare(b.title))

}

    return sortedData


}