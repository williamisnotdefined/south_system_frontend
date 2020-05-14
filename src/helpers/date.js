const toLocaleString = date =>
    `${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}`

export default toLocaleString
