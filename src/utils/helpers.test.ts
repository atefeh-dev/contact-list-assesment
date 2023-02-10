import { mockClients, mockAlphabeticOrderedClients } from '../mocks.data'
import { groupByFirstLetter } from './helpers'


describe("grouping api data into alphabetics", function() {
    test("should group some clients", function() {
        expect(groupByFirstLetter(mockClients)).toStrictEqual(mockAlphabeticOrderedClients)
    })
}) 