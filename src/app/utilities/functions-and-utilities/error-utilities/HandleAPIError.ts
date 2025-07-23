import { NextResponse } from 'next/server';
import logError from '@/app/utilities/functions-and-utilities/error-utilities/LogError';
import getErrorStatusCode from '@/app/utilities/functions-and-utilities/error-utilities/ErrorStatusCodes';
import getServerErrorMessage from '@/app/utilities/functions-and-utilities/error-utilities/ServerErrorMessage';

export default function handleServerError(error: unknown): NextResponse {
  logError(error);

  return NextResponse.json(
    { error: getServerErrorMessage(error) },
    { status: getErrorStatusCode(error) }
  );
}
