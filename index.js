function makeObjectDeepCopy(objToCopy) {
  if (typeof objToCopy !== "object" || objToCopy === null) {
    throw new Error("not an obj");
  }
  if (objToCopy instanceof Object) {
    return Object.keys(objToCopy).reduce((newObj, key) => {
      newObj[key] = objToCopy[key];
      return newObj;
    }, {});
  }
}

function selectFromInterval(arr, start, end) {
  if (isNaN(start) || isNaN(end)) {
    throw new Error("error message");
  }

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      throw new Error("error message");
    }
  }

  if (start > end) {
    const filteredArr = arr.filter((el) => el >= end && el <= start);
    return filteredArr;
  }
  const filteredArr = arr.filter((el) => el >= start && el <= end);
  return filteredArr;
}

const myIterable = {
  from: 1,
  to: 4,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else if (this.from > this.to || isNaN(this.from) || isNaN(this.to)) {
      throw new Error("error message");
    } else {
      return { done: true };
    }
  },
};
