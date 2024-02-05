export const TETRIMINOS = {
    I: {
        color: '#04D9FF',
        variations: [
            [[1, 1, 1, 1]],
            [[1], [1], [1], [1]]
        ],
        currentVariationIndex: 0
    },

    J: {
        color: '#035BFF',
        variations: [
            [[1, 0, 0], [1, 1, 1]],
            [[1, 1], [1, 0], [1, 0]],
            [[1, 1, 1], [0, 0, 1]],
            [[0, 1], [0, 1], [1, 1]]
        ],
        currentVariationIndex: 0
    },

    L: {
        color: '#FFA703',
        variations: [
            [[0, 0, 1], [1, 1, 1]],
            [[1, 0], [1, 0], [1, 1]],
            [[1, 1, 1], [1, 0, 0]],
            [[1, 1], [0, 1], [0, 1]]  
        ],
        currentVariationIndex: 0
    },

    O: {
        color: '#D9FF03',
        variations: [
            [[1, 1], [1, 1]]
        ],
        currentVariationIndex: 0
    },

    S: {
        color: '#5BFF03',
        variations: [
            [[0, 1, 1], [1, 1, 0]],
            [[1, 0], [1, 1], [0, 1]]            
        ],
        currentVariationIndex: 0
    },

    T: {
        color: '#A703FF',
        variations: [
            [[0, 1, 0], [1, 1, 1]],
            [[1, 0], [1, 1], [1, 0]],
            [[1, 1, 1], [0, 1, 0]],
            [[0, 1], [1, 1], [0, 1]]            
        ],
        currentVariationIndex: 0
    },

    Z: {
        color: '#FF2903',
        variations: [
            [[1, 1, 0], [0, 1, 1]],
            [[0, 1], [1, 1], [1, 0]]
        ],
        currentVariationIndex: 0
    }
}