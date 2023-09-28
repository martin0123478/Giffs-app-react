import { render, screen } from '@testing-library/react'
import GifItem from '../../src/components/GifItem'
describe('Pruebas en GifItem.js', () => {
    const title = 'saitama'
    const url = 'https://one-punch/saitama.jpg'
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('Debe mostrar la imagen con el URL y el alt indicado', () => {
        render(<GifItem title={title} url={url} />)
        //screen.debug()
        //  expect(screen.getByRole('img').src).toBe(url)
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)

    })

    test('debe mostar el titulo en el componente', () => {
        render(<GifItem title={title} url={url} />)
        expect(screen.getByAltText(title)).toBeTruthy()
    })
})