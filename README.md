# waitFor
A small utility function which waits for a condition to be met and returns the result.
Originally written for use in integration tests waiting for async operations to complete in React hook components.
Particularly, updates involving state changes.

## Usage
```javascript
// with default options
await waitFor(checkFn);

// with custom options
await waitFor(checkFn, { delay: 50, timeout: 1000 });
```

## Examples

```javascript
import waitFor from 'wait-for';
// other imports

describe('MyDataComponent', () => {
    beforeEach(() => {
        fetchMock.reset();

        store.dispatch(loadDataset(datasetFixture.url));

        return waitFor(() => openedDatasetSelector(store.getState()));
    });

    it('should decorate team entries with standard properties', async () => {
        const result = await waitFor(() => sut.teamsSelector(store.getState()));
        const teams = Object.values(result);

        expect(teams.every((team) => team.canEdit)).toBe(true);
    });
});
```