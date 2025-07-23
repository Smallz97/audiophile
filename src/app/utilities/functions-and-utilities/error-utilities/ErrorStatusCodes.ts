import type { ErrorWithStatus } from '@/app/utilities/library/definitions';

export default function getStatusCode(error: unknown): number {
  if (
    error &&
    typeof error === 'object' &&
    'status' in error &&
    typeof (error as ErrorWithStatus).status === 'number'
  ) {
    return (error as ErrorWithStatus).status;
  }

  const name = (error as Partial<Error>)?.name;
  const normalizedName = typeof name === 'string' ? name.toLowerCase() : '';

  if (error instanceof SyntaxError || normalizedName === 'cartparseerror') return 400;
  if (normalizedName === 'productnotfounderror') return 404;
  if (normalizedName === 'unauthorizederror') return 401;
  if (normalizedName === 'forbiddenerror') return 403;
  if (normalizedName === 'validationerror') return 422;
  return 500;
}