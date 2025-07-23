export default function logError(error: unknown) {
  console.error({
    message: (error as Error).message,
    name: (error as Error).name,
    stack: (error as Error).stack,
    time: new Date().toISOString(),
  });
}