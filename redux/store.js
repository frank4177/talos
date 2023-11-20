import { combineReducers, configureStore} from '@reduxjs/toolkit'
import userSlice from './features/userSlice'
import reloadSlice from './features/reloadSlice'
import sessionStorage from 'redux-persist/lib/storage/session'
import {
  persistStore,
  persistReducer,
} from 'redux-persist'



const persistConfig = {
  key: 'root',
  version: 1,
  storage: sessionStorage,
}

const rootReducer = combineReducers({user: userSlice, reload: reloadSlice});

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck: false
    })
})

export let persistor = persistStore(store)