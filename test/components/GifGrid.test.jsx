import { render, screen } from "@testing-library/react"
import GifGrid from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')
describe('Pruebas en GifGrid', () => {
    const category = 'One punch'
    test('Debe de mostrar el loadind cargando', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid categories={category} />)
        expect(screen.getAllByText('Cargando...'))
        expect(screen.getByText(category))
    })
    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'abc',
            title: 'Saytama',
            url: 'https://saitama.jpg'
        }, {
            id: 123,
            title: 'goku',
            url: 'https://goku.jpg'
        }]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid categories={category} />)
        expect(screen.getAllByRole('img').length).toBe(2)
    })
})