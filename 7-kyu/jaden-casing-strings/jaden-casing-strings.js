Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { 
    value: function() {
      
      return this.split(' ').map(word => {
        
        if (word.length > 0) {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
        return ''; //
      }).join(' ');
    }
  }
);