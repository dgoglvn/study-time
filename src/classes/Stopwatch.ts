export class Stopwatch {
  private _count: number = 0;
  private _interval: number;
  private _timerId: number | undefined;
  private _isRunning: boolean = false;

  constructor(interval: number) {
    this._interval = interval;
  }

  /** start counting */
  public start(): void {
    // if stopwatch is already running, start can't be called again
    if (this._isRunning) return;

    this._isRunning = true;
    console.log(this._isRunning);

    this._timerId = setInterval(() => {
      this._count++;
      console.log(`time: ${this._count}`);
    }, this._interval);
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

  /** helper method for checking isRunning */
  public checkIsRunning(): boolean {
    console.log(this._isRunning);
    return this._isRunning;
  }
}
