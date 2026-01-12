function createEventEmitter() {
  const eventMap = new Map();

  const emitter = {
    on(event, callback) {
      if (!eventMap.has(event)) {
        eventMap.set(event, []);
      }
      eventMap.get(event).push(callback);
    },

    off(event, callback) {
      if (!eventMap.has(event)) return;
      const next = eventMap.get(event).filter(cb => cb !== callback);
      eventMap.set(event, next);
    },

    emit(event, ...args) {
      if (!eventMap.has(event)) return;
    
      const callbacks = [...eventMap.get(event)];
      callbacks.forEach(cb => cb(...args));
    },

    once(event, callback) {
      const wrapper = (...args) => {
        callback(...args);
        emitter.off(event, wrapper);
      };
      emitter.on(event, wrapper);
    },
  };

  return emitter;
}

// 테스트
const emitter = createEventEmitter();

const handler = (data) => console.log('Received:', data);

emitter.on('message', handler);
emitter.emit('message', 'Hello'); // "Received: Hello"
emitter.emit('message', 'World'); // "Received: World"

emitter.off('message', handler);
emitter.emit('message', 'Silent'); // (출력 없음)

emitter.once('login', (user) => console.log('Welcome:', user));
emitter.emit('login', 'Kim'); // "Welcome: Kim"
emitter.emit('login', 'Lee'); // (출력 없음)