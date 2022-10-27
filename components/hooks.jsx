export const reverseIt = (blogs) => {
    const reversed = blogs.map((item, idx) => blogs[blogs.length - 1 - idx])
    return reversed
}