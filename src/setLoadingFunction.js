export const setLoading = (state) => {
    setTimeout(() => {
        state(false);
    }, 3000)
}