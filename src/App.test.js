import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import BookingPage, { updateTimes } from './components/BookingPage';
import { BrowserRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate
}));


describe('Booking Form', () => {
  test('Renders the Booking Form Label', () => {
    const initialTimes = ['Choose Time', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

    render(
      <BrowserRouter>
        <BookingForm availableTimes={initialTimes} />
      </BrowserRouter>
    )
    const labelElement = screen.getByText('Choose Time')
    expect(labelElement).toBeInTheDocument()
  })

  test('Initialize Times', () => {

    render(<BookingPage />)
    const select = screen.getByTestId('res-time')
    const options = select.getElementsByTagName('option')

    expect(options.length).toEqual(7)
  })

  test('Update Times', () => {

    render(<BookingPage />)
    const calendar = screen.getByTestId('res-date')
    fireEvent.mouseDown(calendar)
    fireEvent.change(calendar, { target: { value: '2023-04-13' } })

    const select = screen.getByTestId('res-time')
    const options = select.getElementsByTagName('option')

    expect(options.length).toEqual(5)

  })
})
