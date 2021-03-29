class Chronometer {
  constructor() {}

  currentTime = 0;
  intervalId = 0;

  startClick(callback) {
    setInterval(() => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`;
    } else {
      return number.toString();
    }
  }

  stopClick() {
    return clearInterval(this.intervalId);
  }

  resetClick() {
    return (this.currentTime = 0);
  }

  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();

    if (min < 10 && sec < 10) {
      return `0${min}:0${sec}`;
    } else if (min > 10 && sec < 10) {
      return `${min}:0${sec}`;
    } else if (min < 10 && sec > 10) {
      return `0${min}:${min}`;
    } else {
      return `${min}:${sec}`;
    };
    }
    

    
  }

