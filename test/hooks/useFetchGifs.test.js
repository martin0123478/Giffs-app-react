import { renderHook,waitFor} from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el Hook useFetchGifs',()=>{
    test('Debe de regresar el estado inicial',()=>{
     const {result} =  renderHook(()=> useFetchGifs('One punch'))
     const {images, isLoading} = result.current
     expect(images.length).toBe(0)
     expect(isLoading).toBeTruthy()
     console.log(result)
    })
    test('Debe de retornar un arreglo de imagenes y el isLoading en false',async()=>{
         const {result} =  renderHook(()=> useFetchGifs('One punch'))
        await waitFor(
            ()=>expect(result.current.images.length).toBeGreaterThan(0)
            
        )
        const {images, isLoading} = result.current
        expect(images.length).toBeGreaterThan(0)
     expect(isLoading).toBeFalsy()
    })
})