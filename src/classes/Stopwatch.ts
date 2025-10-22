/** every Listener is a callback function that returns nothing.
 */
type Listener = (time: number) => void;

export class Stopwatch {
  public _count: number = 0;
  private _timerId: number | undefined;
  private _isRunning: boolean = false;
  private _listeners: Listener[] = [];

  /** start counting */
  public start(): void {
    // if stopwatch is already running, start can't be called again
    if (this._isRunning) return;

    this._isRunning = true;

    this._timerId = setInterval(() => {
      this._count++;
      this.notify();
    }, 1000);
  }

  /** stop counting */
  public stop(): void {
    clearInterval(this._timerId);
    this._isRunning = false;
  }

  /** reset count back to 0 */
  public reset(): void {
    this.stop();
    this._count = 0;
    this._isRunning = false;
  }

  /** returns the value of count */
  get count() {
    return this._count;
  }

  /** returns the value of isRunning */
  get isRunning() {
    return this._isRunning;
  }

  /** subscribes to events or state changes produced by the Stopwatch class.
   * returns an unsubscribe function for convenience.
   */
  public subscribe(listener: Listener): () => void {
    this._listeners.push(listener);

    listener(this._count);

    return () => this.unsubscribe(listener);
  }

  /** ubsubscribes from events */
  public unsubscribe(listener: Listener) {
    // creates a new list from the original list without the passed in lister as argument;
    // removes the listener.
    this._listeners = this._listeners.filter((l) => l !== listener);
  }

  /** notifies each listener in the list and updates them with the current count
   */
  private notify(): void {
    this._listeners.forEach((listener) => {
      listener(this._count);
    });
  }
}
