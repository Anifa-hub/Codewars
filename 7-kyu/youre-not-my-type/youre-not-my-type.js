 
Object.defineProperty(
    Array.prototype, 'ofType', { value :
        function ofType(type) {
            // your code here
            return this.filter((ele)=>{
              return ele.constructor ===type
            });
        }
    }
);