Object.defineProperty(
    Array.prototype, 'ofType', {
        value: function ofType(type) {
            if (type === null || type === undefined) {
                return this.filter(ele => ele === null || ele === undefined);
            }
​
            return this.filter(ele => {
                return ele instanceof type;
            });
        },
        writable: true,
        enumerable: false,
        configurable: true
    }
);
​