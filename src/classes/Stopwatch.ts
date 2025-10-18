/** every Listener is a callback function that returns nothing.
 */
type Listener = (time: number) => void;

export class Stopwatch {
  private _count: number = 0;
  private _timerId: number | undefined;
  private _isRunning: boolean = false;
  private _listeners: Listener[] = [];

  /** start counting */
  public start(): void {
    // if stopwatch is already running, start can't be called again
    if (this._isRunning) return;

    this._isRunning = true;
    console.log(this._isRunning);

    this._timerId = setInterval(() => {
      this._count++;
      this.notify();
      console.log(`time: ${this._count}`);
    }, 1000);
  }

  /** stop counting */
  public stop(): void {
    clearInterval(this._timerId);
    this._isRunning = false;
    console.log("stopping...");
  }

  /** reset count back to 0 */
  public reset(): void {
    this.stop();
    this._count = 0;
  }

  /** returns the value of count */
  get value() {
    return this._count;
  }

  /**  */
  public subscribe(listener: Listener) {
    this._listeners.push(listener);
  }

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
