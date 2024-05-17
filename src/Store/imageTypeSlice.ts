/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { POKEMON_IMAGE_TYPE } from '../Constants'

export type PokemonImageKeyType = (typeof POKEMON_IMAGE_TYPE)[keyof typeof POKEMON_IMAGE_TYPE]

interface ImageTypeState {
  type: PokemonImageKeyType
}
const initialState: ImageTypeState = {
  type: POKEMON_IMAGE_TYPE.OFFCIAL_ARTWORK,
}

export const imageTypeSlice = createSlice({
  name: 'imageType',
  initialState,
  reducers: {
    changeImageType: (state, action: PayloadAction<ImageTypeState>) => {
      state.type = action.payload.type
    },
  },
})

export const { changeImageType } = imageTypeSlice.actions

export const imageTypeReducer = imageTypeSlice.reducer
