import { fireEvent, render, screen } from '@testing-library/react'
import Tab from './tab';
import { Keys } from '../../redux/types';

describe('should render <Tab/> with different props', function () {
    function renderTab(title: Keys = 'a', selectedTab: Keys = 'a') {
        const setSelectedTab = jest.fn();
        const { rerender } = render(<Tab title={title} setSelectedTab={setSelectedTab} selectedTab={selectedTab} count={2} />)

        return { setSelectedTab, rerender };
    }
    test('should render <Tab/>', function () {
        const { setSelectedTab } = renderTab()

        fireEvent.click(screen.getByTestId('tab/a'))

        // checking if the given prop is called in the onClick of the <Tab/>
        expect(setSelectedTab).toBeCalled()
    })

    test('should render <Tab/> and checks for the active and inactive style of it', function () {
        const { setSelectedTab, rerender } = renderTab('b', 'a')

        // currently tab a is active not b. there fore we should not have active class on it
        expect(screen.getByTestId('tab/b')).not.toHaveClass('tabs__tab--active')

        fireEvent.click(screen.getByTestId('tab/b'))

        expect(setSelectedTab).toBeCalled()

        // clicking on the tab b in unit test would not reevaluate props, so we do the rerender to simulate it
        rerender(<Tab title={'b'} setSelectedTab={setSelectedTab} selectedTab={'b'} count={2} />)

        // as the title and the selected tab is equal we need to have active class now
        expect(screen.getByTestId('tab/b')).toHaveClass('tabs__tab--active')
    })
})