class EventBus {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    private events: { [key: string]: Function[] } = {};
  
    emit(event: string, data: unknown) {
      if (this.events[event]) {
        this.events[event].forEach((callback) => callback(data));
      }
    }
  
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    on(event: string, callback: Function) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    }
  
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    off(event: string, callback: Function) {
      if (!this.events[event]) return;
      this.events[event] = this.events[event].filter((cb) => cb !== callback);
    }
  }
  
  export default new EventBus();
  