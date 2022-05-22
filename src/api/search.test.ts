import { search } from './search';
import {
    itemWithLongDescription,
    itemWithoutDescription,
    itemWithoutLink,
    itemWithoutName,
    validItem
} from './__stubs__/responseItems';
import { item as returnItem } from './__stubs__/returnItems';

describe('search', () => {
    test('should return the list of 5 public apis with description less than 100 characters', () => {
        jest.spyOn(window, 'fetch').mockResolvedValue({
            json: () =>
                Promise.resolve({
                    entries: [ validItem, itemWithoutDescription, validItem, itemWithoutName, validItem, itemWithLongDescription, validItem, validItem, validItem, itemWithoutLink ],
                }),
        } as Response);

        return expect(search('title')).resolves.toEqual([ returnItem, returnItem, returnItem, returnItem, returnItem ]);
    });

    test('should return empty array when the response is empty', () => {
        jest.spyOn(window, 'fetch').mockResolvedValue({
            json: () =>
                Promise.resolve({
                    entries: [],
                }),
        } as Response);

        return expect(search('title')).resolves.toEqual([]);
    });

    test('should return empty array when the response is null', () => {
        jest.spyOn(window, 'fetch').mockResolvedValue({
            json: () =>
                Promise.resolve({
                    entries: null,
                }),
        } as Response);

        return expect(search('title')).resolves.toEqual([]);
    });

    test('should return the error message when it occurs', () => {
        jest.spyOn(window, 'fetch').mockRejectedValue(new Error('error'));

        return expect(search('title')).resolves.toEqual(new Error('error'));
    });
});
