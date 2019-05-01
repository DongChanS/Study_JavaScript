const capitalize = (value) => {
    let str_array = value.split(" ")
    let cap_array = str_array.map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    })
    return cap_array.join(" ")
}