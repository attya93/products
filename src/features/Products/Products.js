import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';

const initalState = {
    isLoading:false,
    products: [],
    productsView:[],
    categories: [],
    product:undefined,
    error:false
};

export const fetchProducts = createAsyncThunk('fetchProducts', async (arg =undefined) => {
    let url = !arg?'https://fakestoreapi.com/products':`https://fakestoreapi.com/products/category/${arg}`
    const response = await fetch(url) ;
    return response.json();   
})

export const fetchCategoys = createAsyncThunk('fetchCategoys', async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories') ;
    return response.json();   
})

export const productsSlice = createSlice({
    name: 'products',
    initialState: initalState,
    reducers: {
        setProductsView: (state, action) => {
            state.productsView = action.payload
        },
        setProduct: (state, action) => {

            state.product = state.productsView.find(el=>el.id === action.payload) 
        },
        clearProduct: (state) => {
            state.product = undefined
        },
        setPriceRage: (state, action) => {
            state.products = state.productsView.filter(product => product.price >= action.payload[0] && product.price <= action.payload[1])
        },
        setRateRange: (state, action) => {
            state.products = state.productsView.filter(product => product.rating.rate <= action.payload)
        },
        RestAllFilters: (state) => {
            state.products = state.productsView
        },
        SortProducts: (state, action) => {
            // state.products = state.productsView
            switch (action.payload.id) {
                case 1:
                    state.products =state.productsView.sort((a, b) => a.title.localeCompare(b.title))
                    break;
                case 2:
                    state.products =state.productsView.sort((a, b) => b.title.localeCompare(a.title))
                    break;
                case 3:
                    state.products =state.productsView.sort((a, b) => a.price - b.price)
                    break;
                case 4:
                    state.products =state.productsView.sort((a, b) => b.price - a.price)
                    break;
                case 5:
                    state.products =state.productsView.sort((a, b) => a.rating.rate - b.rating.rate)
                    break;
                case 6:
                    state.products =state.productsView.sort((a, b) => b.rating.rate - a.rating.rate)
                    break;

                default:
                    break;
            }
        },
        seachProduct: (state, action) => {
            state.products = state.productsView.filter(product => product.title.toLowerCase().includes(action.payload.toLowerCase()) 
            || product.description.toLowerCase().includes(action.payload.toLowerCase())
            || product.category.toLowerCase().includes(action.payload.toLowerCase())
            )
        },
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.products = action.payload
                state.productsView = action.payload
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.isLoading = false
                state.error = true
            })

            .addCase(fetchCategoys.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchCategoys.fulfilled, (state, action) => {
                state.isLoading = false
                state.categories = action.payload
            })
            .addCase(fetchCategoys.rejected, (state) => {
                state.isLoading = false
                state.error = true
            })
    }
})


export const {setProductsView, setProduct, clearProduct,setPriceRage,setRateRange
    ,RestAllFilters,SortProducts,seachProduct} = productsSlice.actions
export default productsSlice.reducer