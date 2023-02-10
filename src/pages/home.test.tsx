import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { mockAlphabeticOrderedClients, mockClients } from '../mocks.data'
import { getContactsApi } from '../services/getContactsApi'
import { store } from "../redux/store";
import { Provider } from "react-redux";

import Home from './home'


jest.mock('../services/getContactsApi')

describe('Integration tests > should render <Home/> and interact with the contact list', function () {
    async function renderHome() {
        const mockGetContactsApi = (getContactsApi as jest.Mock).mockImplementation(() => {
            return Promise.resolve({
                results: mockClients
            })
        })

        // we are at tab a by default
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )

        // await for all the setSates and dispatches
        await screen.findByText('Jesse, ALEXANDER')

        expect(screen.getByTestId(`tab/a/clients_count`)).toHaveTextContent('2')

        return { mockGetContactsApi };
    }

    test("render Home", async function () {
        const { mockGetContactsApi } = await renderHome()

        expect(mockGetContactsApi).toBeCalled()
    })

    test("should open ups <Modal/> to show up all the information about Jesse, Alexander and closing up the modal", async function () {
        await renderHome()

        // trigring the modal to be opened
        fireEvent.click(screen.getByText('Jesse, ALEXANDER'))

        // await for all the setStates and dispatches
        await screen.findByText(mockAlphabeticOrderedClients.a[0].email);

        expect(screen.getByTestId("street")).toHaveTextContent(mockAlphabeticOrderedClients.a[0].location.street.name)
        expect(screen.getByTestId("phone")).toHaveTextContent(mockAlphabeticOrderedClients.a[0].phone)
        expect(screen.getByTestId("postcode")).toHaveTextContent(String(mockAlphabeticOrderedClients.a[0].location.postcode))
        expect(screen.getByTestId("city")).toHaveTextContent(mockAlphabeticOrderedClients.a[0].location.city)
        expect(screen.getByTestId("email")).toHaveTextContent(mockAlphabeticOrderedClients.a[0].email)

        // closing the modal by clicking out of the modal dom
        fireEvent.click(screen.getByTestId("navbar/title"))

        // if we no longer see the emails it means that modal is unmounted and removed from the dom
        await waitFor(() => {
            expect(screen.queryByText(mockAlphabeticOrderedClients.a[0].email)).not.toBeInTheDocument()
        })
    })

    test('should close the current modal and open up another modal if the user clicks on other people names', async function () {
        await renderHome()

        // trigring the modal to be opened for Jesse Alexander
        fireEvent.click(screen.getByTestId(mockAlphabeticOrderedClients.a[0].email));

        // await for all the setStates and dispatches -- we are looking for Jesse Alexander Email: jesse.alexander@example.com
        await screen.findByText(mockAlphabeticOrderedClients.a[0].email);

        // closing the modal by clicking on another user full name // the data-testid of users is assinged to their emails.
        // here we are clicking on Sofia Anderson name. with the help of her email as the data-testid: sofia.anderson@example.com
        fireEvent.click(screen.getByTestId(mockAlphabeticOrderedClients.a[1].email))

        // await for all the setStates and dispatches -- we are looking for Jesse Alexander Email: sofia.anderson@example.com
        await screen.findByText(mockAlphabeticOrderedClients.a[1].email);

        // if we no longer see the email for Jesse Alexander it means that the modal regards to his information iss unmounted and removed from the dom
        await waitFor(() => {
            expect(screen.queryByText(mockAlphabeticOrderedClients.a[0].email)).not.toBeInTheDocument()
        })
    })

    test('should navigate from tab a to tab b and pop up some modals', async function () {
        await renderHome()

        // trigring the modal to be opened for Jesse Alexander
        fireEvent.click(screen.getByTestId('tab/b/clients_count'));

        // await for all the setSates and dispatches
        await screen.findByTestId(mockAlphabeticOrderedClients.b[0].email)

        // poping up the modal for Dan Brown with the help of its data-testid: dan.brown@example.com
        fireEvent.click(screen.getByTestId(mockAlphabeticOrderedClients.b[0].email))

        expect(screen.getByTestId("street")).toHaveTextContent(mockAlphabeticOrderedClients.b[0].location.street.name)
        expect(screen.getByTestId("phone")).toHaveTextContent(mockAlphabeticOrderedClients.b[0].phone)
        expect(screen.getByTestId("postcode")).toHaveTextContent(String(mockAlphabeticOrderedClients.b[0].location.postcode))
        expect(screen.getByTestId("city")).toHaveTextContent(mockAlphabeticOrderedClients.b[0].location.city)
        expect(screen.getByTestId("email")).toHaveTextContent(mockAlphabeticOrderedClients.b[0].email)

        // closing the modal by clicking on the cross icon
        fireEvent.click(screen.getByTestId('modal/close'));

        // waiting for the modal to be removed
        await waitFor(() => {
            expect(screen.queryByText(mockAlphabeticOrderedClients.b[0].email)).not.toBeInTheDocument()
        })
    })

    test("should see the preloader before the data is fetched", async function () {
        const mockGetContactsApi = (getContactsApi as jest.Mock).mockImplementation(() => {
            return new Promise(res => {
                setTimeout(() => res({
                    results: mockClients
                }), 100)
            })
        })

        // we are at tab a by default
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )

        await screen.findByTestId('preloader');

        await waitForElementToBeRemoved(() => screen.queryByTestId('preloader'))

        expect(mockGetContactsApi).toBeCalled()
    })

    test("should see the try again due to api error and by clicking on try again button we re try with the api", async function () {
        const mockGetContactsApi = (getContactsApi as jest.Mock).mockImplementationOnce(() => {
            return Promise.reject('503')
        }).mockImplementationOnce(() => {
            return Promise.resolve({
                results: mockClients
            })
        })

        // we are at tab a by default
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )

        // catch the error in the dom
        await screen.findByTestId('try_again');

        // retry with hiting the api again
        fireEvent.click(screen.getByTestId('try_again'));

        // await for all the setSates and dispatches
        await screen.findByTestId(mockAlphabeticOrderedClients.a[0].email)

        expect(mockGetContactsApi).toBeCalledTimes(2)
    })
})