

export const truncate = (text) => {
    return `${text.slice(0, 6)}...${text.slice( -4)}`
}