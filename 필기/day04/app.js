const readFile = (myFunc) => {
    let content
    // 파일을 읽어오는데 100ms 소요됨.
    setTimeout(() => {
        content = "Hello World"
        myFunc(content)
    }, 100)
    return content
}

const log = (content) => {
    console.log(content)
}

readFile(log)