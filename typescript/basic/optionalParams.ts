const process = (a: number, b: number, isDouble?: boolean) => {
  const sum = a + b;

  return isDouble ? sum * 2 : sum;
};

const hello = (value: string, returnNull?: boolean) => {
  if (returnNull) {
    return null;
  }

  return `Hello ${value}`;
};

/**
 * 예를들어 값에 string | null 일때
 * 바로 접근하려 하면 null 이 있을수 있기때문에 에러가 나온다.
 * 그래서 옵셔널 체이닝 or non-null 처리를 해주어야 한다.
 *
 */
