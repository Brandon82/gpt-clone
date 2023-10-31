type Procedure = (...args: any[]) => void;

interface DebouncedFunction extends Function {
  cancel: () => void;
}

/**
 * Returns a debounced version of the provided function.
 * The debounced function will delay the invocation of the original function
 * until after `wait` milliseconds have elapsed since the last time it was invoked.
 * 
 * @param func - The function to debounce.
 * @param wait - The number of milliseconds to delay.
 * @returns The debounced function.
 */
function debounce<F extends Procedure>(
  func: F,
  wait: number = 300
): DebouncedFunction {
  let timeoutId: NodeJS.Timeout | null = null;

  const debounced: any = function(this: any, ...args: any[]) {
    const context = this;

    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };

  debounced.cancel = function() {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
  };

  return debounced;
}

export default debounce;
