import waitFor from '.';

describe('waitFor', () => {
    describe('with default options', () => {
        describe('success', () => {
            it('should return the eval result after a delay', async () => {
                const expected = 'Bindlestick Candysack';
                let currentValue = '';
        
                window.setTimeout(() => {
                    currentValue = expected
                }, 900);
        
                const result = await waitFor(() => currentValue);
        
                expect(result).toBe(expected);
            });
        });

        describe('failure', () => {
            it('should return a rejected promise after the timeout threshold elapses', async () => {
                const expected = 'Bumblebee Caddyshack';
                let currentValue = '';
        
                try {
                    const result = await waitFor(() => currentValue);
    
                    expect('You have encountered the extremely sad path. If you find yourself here, you broke something.').toBe('This test to pass.');
                } catch(e) {
                    expect(e).toEqual(new Error('checkFn did not pass within timeout'));
                }
            });
        });
    });
    
    describe('with custom options', () => {
        describe('success', () => {
            it('should return the eval result using a custom delay value', async () => {
                const expected = 'Bendycar Crumplezone';
                let currentValue = '';
        
                window.setTimeout(() => {
                    currentValue = expected
                }, 25);
        
                const result = await waitFor(() => currentValue, { delay: 5 });
        
                expect(result).toBe(expected);
            });
            
            it('should return the eval result within a custom timeout threshold', async () => {
                const expected = 'Bootyshorts Cutiepie';
                let currentValue = '';
        
                window.setTimeout(() => {
                    currentValue = expected
                }, 25);
        
                const result = await waitFor(() => currentValue, { timeout: 26 });
        
                expect(result).toBe(expected);
            });
            
            it('should return the eval result within a custom timeout threshold using a custom delay value', async () => {
                const expected = 'Bumpercar Cacklepatch';
                let currentValue = '';
        
                window.setTimeout(() => {
                    currentValue = expected
                }, 25);
        
                const result = await waitFor(() => currentValue, { delay: 5, timeout: 26 });
        
                expect(result).toBe(expected);
            });
        });

        describe('failure', () => {
            it('should return a rejected promise if the check function returns truthy after the delay time', async () => {
                const expected = 'Thunderdome Masterblast';
                let currentValue = '';

                window.setTimeout(() => {
                    currentValue = expected
                }, 11);
        
                try {
                    const result = await waitFor(() => currentValue, { delay: 10, timeout: 12 });

                    expect('You have encountered the extremely sad path. If you find yourself here, you broke something.').toBe('This test to pass.');
                } catch(e) {
                    expect(e).toEqual(new Error('checkFn did not pass within timeout'));
                }
            });
        });
    });
});