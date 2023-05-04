export function useObjectToArray(objectExample: {[key: string]: any}) {
    const arrayOfKeys = Object.keys(objectExample)
    const finalArray = arrayOfKeys.map((key,index) => {
        return(
        {key: key, value: objectExample[key]} 
        )
    })
    return finalArray
}