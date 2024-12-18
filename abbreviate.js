function abbrevName(name) {
    let x = name.split(' ')
    let y = x[0].charAt(0).toUpperCase()+"."+ x[1].charAt(0).toUpperCase()
    return y
}