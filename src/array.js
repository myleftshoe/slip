export const move = (arr, oldIndex, newIndex) => {
    if (oldIndex === null && newIndex === null) return arr;
    const result = [...arr];
    let item = null;
  
    if (oldIndex !== null) {
        item = result.splice(oldIndex, 1)[0];
    }
  
    if (newIndex !== null) {
        result.splice(newIndex, 0, item);
    }
  
    return result;
  };
    
export const shuffle = arr => arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);

export const reverse = arr => arr.slice().reverse();