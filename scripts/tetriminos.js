export const TETRIMINOS = {
    I: {
        color: 'cyan',
        variations: [
            [[1, 1, 1, 1]],
            [[1], [1], [1], [1]]
        ],
        currentVariationIndex: 0
    },

    J: {
        color: 'blue',
        variations: [
            [[1, 0, 0], [1, 1, 1]],
            [[1, 1], [1, 0], [1, 0]],
            [[1, 1, 1], [0, 0, 1]],
            [[0, 1], [0, 1], [1, 1]]
        ],
        currentVariationIndex: 0
    },

    L: {
        color: 'orange',
        variations: [
            [[0, 0, 1], [1, 1, 1]],
            [[1, 0], [1, 0], [1, 1]],
            [[1, 1, 1], [1, 0, 0]],
            [[1, 1], [0, 1], [0, 1]]  
        ],
        currentVariationIndex: 0
    },

    O: {
        color: 'yellow',
        variations: [
            [[1, 1], [1, 1]]
        ],
        currentVariationIndex: 0
    },

    S: {
        color: 'green',
        variations: [
            [[0, 1, 1], [1, 1, 0]],
            [[1, 0], [1, 1], [0, 1]]            
        ],
        currentVariationIndex: 0
    },

    T: {
        color: 'purple',
        variations: [
            [[0, 1, 0], [1, 1, 1]],
            [[1, 0], [1, 1], [1, 0]],
            [[1, 1, 1], [0, 1, 0]],
            [[0, 1], [1, 1], [0, 1]]            
        ],
        currentVariationIndex: 0
    },

    Z: {
        color: 'red',
        variations: [
            [[1, 1, 0], [0, 1, 1]],
            [[0, 1], [1, 1], [1, 0]]
        ],
        currentVariationIndex: 0
    }
}