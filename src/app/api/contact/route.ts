import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Temporarily bypass request processing to test route availability
    console.log('Contact API route hit (simplified test)');
    return NextResponse.json({ success: true, message: 'API route is working (simplified test).' });
  } catch (error) {
    console.error('Error in simplified contact API route:', error);
    return NextResponse.json({ error: 'Simplified API route error.' }, { status: 500 });
  }
}

