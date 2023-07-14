export const reducer = (state, action) => {
    switch (action.type) {
        case 'RESIZE':
            return { ...state, currentScreenSize: action.payload }
        case 'SCROLLTRIGGER':
            return { ...state, trigger: action.payload }
    }
}