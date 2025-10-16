export class Stopwatch {
  private _count = 0;
  private _interval: number;
  private _timerId: number | undefined;
  private _isRunning: boolean = false;

  constructor(interval: number) {
    this._interval = interval;
  }

  /** start counting */
  start(): void {
    this._isRunning = true;

    if (this._isRunning) return;

    this._timerId = setInterval(() => {
      this._count++;
    }, this._interval);
  }

  /** stop counting */
  stop(): void {
    clearInterval(this._timerId);
    this._isRunning = false;
  }

  /** reset count back to 0 */
  reset(): void {
    this.stop();
    this._count = 0;
  }
}
